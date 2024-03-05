import {Client} from "https://deno.land/x/postgres/mod.ts";
import { load } from "https://deno.land/std@0.217.0/dotenv/mod.ts";

const env = await load();

const database = new Client({
    user: env['DB_USER'],
    database: env['DB_NAME'],
    hostname: env['DB_HOSTNAME'],
    password: env['DB_PASSWORD'],
    port: parseInt(env['DB_PORT'])!
});

await database.connect();

export default database;