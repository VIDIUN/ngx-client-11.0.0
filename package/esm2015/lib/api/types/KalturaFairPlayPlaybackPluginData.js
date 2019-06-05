/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData } from './KalturaDrmPlaybackPluginData';
/**
 * @record
 */
export function KalturaFairPlayPlaybackPluginDataArgs() { }
/** @type {?|undefined} */
KalturaFairPlayPlaybackPluginDataArgs.prototype.certificate;
export class KalturaFairPlayPlaybackPluginData extends KalturaDrmPlaybackPluginData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFairPlayPlaybackPluginData' },
            certificate: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFairPlayPlaybackPluginData.prototype.certificate;
}
typesMappingStorage['KalturaFairPlayPlaybackPluginData'] = KalturaFairPlayPlaybackPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmFpclBsYXlQbGF5YmFja1BsdWdpbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQW9DLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7QUFPaEgsTUFBTSx3Q0FBeUMsU0FBUSw0QkFBNEI7Ozs7SUFJL0UsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhLCBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhQXJncyB7XG4gICAgY2VydGlmaWNhdGU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmFpclBsYXlQbGF5YmFja1BsdWdpbkRhdGEgZXh0ZW5kcyBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhIHtcblxuICAgIGNlcnRpZmljYXRlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmFpclBsYXlQbGF5YmFja1BsdWdpbkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhJyB9LFxuXHRcdFx0XHRjZXJ0aWZpY2F0ZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmFpclBsYXlQbGF5YmFja1BsdWdpbkRhdGEnXSA9IEthbHR1cmFGYWlyUGxheVBsYXliYWNrUGx1Z2luRGF0YTsiXX0=