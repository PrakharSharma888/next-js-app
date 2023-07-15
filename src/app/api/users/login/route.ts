import { connect } from "@/app/db/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';