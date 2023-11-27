import mongoose, { Document } from 'mongoose';

export interface IComment extends Document {
    id: number;
    comment: string;
}