import { connect } from "@/db/config";
import { User } from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

connect();
export async function POST(request: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
