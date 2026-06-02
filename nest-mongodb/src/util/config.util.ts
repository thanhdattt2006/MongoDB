import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

export function getImageUrl() {
    return configService.get('image_url');
}