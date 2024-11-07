import express from 'express';
import bcryptjs from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { generateTokenAndSetCookie } from '../utils/setJwt.js';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { id, password, nickname } = req.body; 

        // pw 보안
        const hashedPassword = await bcryptjs.hash(password, 10);
  
        // Prisma를 사용해 사용자 생성
        const newUser = await prisma.user.create({
            data: {
                id,
                password: hashedPassword,
                nickname
            }
        });
  
        res.status(200).json({
            success: true,
            message: "유저 생성 완료",
            user: newUser,
        });
    } catch (error) {
        console.error('Server error:', error); 
        res.status(400).json({ success: false, message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { id, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { id:id }
        });

        if(!user) {
            return res.status(400).json({success: false, message: "not exist user"});
        }

        const validatePassword = await bcryptjs.compare(password, user.password);
        if (!validatePassword) {
            return res.status(400).json({success: false, message: "wrong password"});
        }

        const token = generateTokenAndSetCookie(res, user.id);

        res.status(200).json({ 
            success: true,
            message: '로그인 성공!',
            user: {
                id: user.id,
                nickname: user.nickname
            },
            token: token
        });
        console.log("로그인 성공");
        console.log("user >>>",user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
});

export default router;

