import path from 'path';
import fs from 'fs'
import dotenv from 'dotenv';

function loadEnvFile(filePath) {
    const envConfig = dotenv.parse(fs.readFileSync(filePath));
    return envConfig;
}
const clienteEnv = loadEnvFile(path.resolve('./cliente1/.env'));


export const cofingFileMaker = {
    key: clienteEnv.claveCliente
}
