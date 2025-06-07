import { PartialType } from '@nestjs/swagger';
import { RegisterDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(RegisterDto) {}
