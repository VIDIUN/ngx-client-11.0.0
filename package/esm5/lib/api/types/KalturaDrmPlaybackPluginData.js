/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaDrmPlaybackPluginData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmPlaybackPluginData, _super);
    function KalturaDrmPlaybackPluginData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDrmPlaybackPluginData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmPlaybackPluginData' },
            scheme: { type: 'es', subTypeConstructor: KalturaDrmSchemeName, subType: 'KalturaDrmSchemeName' },
            licenseURL: { type: 's' }
        });
        return result;
    };
    return KalturaDrmPlaybackPluginData;
}(KalturaPluginData));
export { KalturaDrmPlaybackPluginData };
if (false) {
    /** @type {?} */
    KalturaDrmPlaybackPluginData.prototype.scheme;
    /** @type {?} */
    KalturaDrmPlaybackPluginData.prototype.licenseURL;
}
typesMappingStorage['KalturaDrmPlaybackPluginData'] = KalturaDrmPlaybackPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztBQVEvRSxJQUFBO0lBQWtELHdEQUFpQjtJQUsvRCxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3JHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0FqQ0w7RUFXa0QsaUJBQWlCLEVBdUJsRSxDQUFBO0FBdkJELHdDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVNjaGVtZU5hbWUgfSBmcm9tICcuL0thbHR1cmFEcm1TY2hlbWVOYW1lJztcbmltcG9ydCB7IEthbHR1cmFQbHVnaW5EYXRhLCBLYWx0dXJhUGx1Z2luRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbHVnaW5EYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhUGx1Z2luRGF0YUFyZ3Mge1xuICAgIHNjaGVtZT8gOiBLYWx0dXJhRHJtU2NoZW1lTmFtZTtcblx0bGljZW5zZVVSTD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGEgZXh0ZW5kcyBLYWx0dXJhUGx1Z2luRGF0YSB7XG5cbiAgICBzY2hlbWUgOiBLYWx0dXJhRHJtU2NoZW1lTmFtZTtcblx0bGljZW5zZVVSTCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhJyB9LFxuXHRcdFx0XHRzY2hlbWUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtU2NoZW1lTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtU2NoZW1lTmFtZScgfSxcblx0XHRcdFx0bGljZW5zZVVSTCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhJ10gPSBLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhOyJdfQ==