/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmSchemeName } from './KalturaDrmSchemeName';
import { KalturaPluginData } from './KalturaPluginData';
/**
 * @record
 */
export function KalturaDrmPlaybackPluginDataArgs() { }
/** @type {?|undefined} */
KalturaDrmPlaybackPluginDataArgs.prototype.scheme;
/** @type {?|undefined} */
KalturaDrmPlaybackPluginDataArgs.prototype.licenseURL;
export class KalturaDrmPlaybackPluginData extends KalturaPluginData {
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
            objectType: { type: 'c', default: 'KalturaDrmPlaybackPluginData' },
            scheme: { type: 'es', subTypeConstructor: KalturaDrmSchemeName, subType: 'KalturaDrmSchemeName' },
            licenseURL: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDrmPlaybackPluginData.prototype.scheme;
    /** @type {?} */
    KalturaDrmPlaybackPluginData.prototype.licenseURL;
}
typesMappingStorage['KalturaDrmPlaybackPluginData'] = KalturaDrmPlaybackPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0FBUS9FLE1BQU0sbUNBQW9DLFNBQVEsaUJBQWlCOzs7O0lBSy9ELFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3JHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtU2NoZW1lTmFtZSB9IGZyb20gJy4vS2FsdHVyYURybVNjaGVtZU5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYVBsdWdpbkRhdGEsIEthbHR1cmFQbHVnaW5EYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVBsdWdpbkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFQbHVnaW5EYXRhQXJncyB7XG4gICAgc2NoZW1lPyA6IEthbHR1cmFEcm1TY2hlbWVOYW1lO1xuXHRsaWNlbnNlVVJMPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSBleHRlbmRzIEthbHR1cmFQbHVnaW5EYXRhIHtcblxuICAgIHNjaGVtZSA6IEthbHR1cmFEcm1TY2hlbWVOYW1lO1xuXHRsaWNlbnNlVVJMIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGEnIH0sXG5cdFx0XHRcdHNjaGVtZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1TY2hlbWVOYW1lLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1TY2hlbWVOYW1lJyB9LFxuXHRcdFx0XHRsaWNlbnNlVVJMIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGEnXSA9IEthbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGE7Il19