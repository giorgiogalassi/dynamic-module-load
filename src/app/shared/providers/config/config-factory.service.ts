import { ConfigService } from './config.service';

export function configFactory(config: ConfigService) {
  return () => config.getConfig();
}
