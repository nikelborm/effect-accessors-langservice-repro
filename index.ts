import { Effect } from 'effect';

export class BackendPort extends Effect.Tag('@vt/BackendPort')<
  BackendPort,
  number
>() {}

export class EnvType extends Effect.Tag('@vt/EnvType')<
  EnvType,
  'development' | 'production'
>() {}
