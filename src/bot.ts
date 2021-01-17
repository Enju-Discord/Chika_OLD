import {
    ShardingManager
} from 'discord.js';
import * as config from './utils/config';

const Shard: ShardingManager = new ShardingManager('./main.js', {
    respawn: true,
    token: config.secrets.token
});


Shard.spawn(1, 15000, -1);