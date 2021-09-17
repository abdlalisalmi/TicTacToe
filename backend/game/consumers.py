import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async


class GamePlay(AsyncJsonWebsocketConsumer):

    async def connect(self):
        self.room_name = "home_page"
        self.room_group_name = 'home_page_group'
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        print(text_data)
        message, code = await self.badge_check(text_data)
        await self.channel_layer.group_send(self.room_group_name,
        {
            'type': 'send_message',
            'message': message,
            "code": code,
            "id": text_data
        })

    async def send_message(self, res):
        await self.send(text_data=json.dumps(
            {
                "payload": res,
            }
        ))