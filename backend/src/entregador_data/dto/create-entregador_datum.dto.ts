import { IsString, IsEmail, IsDateString, IsNumber, Min, Max } from 'class-validator';

export class CreateEntregadorDatumDto {
@IsString({ message: 'Necessário que nome seja String' })
    nome: string;
        
    @IsNumber()
    @Min(0,{ message: 'Necessário que valor seja maior que 0' })
    @Max(10,{ message: 'Necessário que valor seja até 10.0' })
    preco: number;
    
    @IsEmail({}, { message: 'E-mail inválido' })
    emailEmpresa: string;
        
    @IsDateString({},{ message: 'Data inválida' })
    dataValidade: Date;
    
    @IsNumber()
    categoriaId: number;
}
    
