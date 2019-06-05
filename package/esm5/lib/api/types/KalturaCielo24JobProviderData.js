/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCielo24Priority } from './KalturaCielo24Priority';
import { KalturaCielo24Fidelity } from './KalturaCielo24Fidelity';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
/**
 * @record
 */
export function KalturaCielo24JobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.captionAssetFormats;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.priority;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.fidelity;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.spokenLanguage;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.replaceMediaContent;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.additionalParameters;
var KalturaCielo24JobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCielo24JobProviderData, _super);
    function KalturaCielo24JobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCielo24JobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCielo24JobProviderData' },
            entryId: { type: 's' },
            flavorAssetId: { type: 's' },
            captionAssetFormats: { type: 's' },
            priority: { type: 'es', subTypeConstructor: KalturaCielo24Priority, subType: 'KalturaCielo24Priority' },
            fidelity: { type: 'es', subTypeConstructor: KalturaCielo24Fidelity, subType: 'KalturaCielo24Fidelity' },
            username: { type: 's', readOnly: true },
            password: { type: 's', readOnly: true },
            baseUrl: { type: 's', readOnly: true },
            spokenLanguage: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            replaceMediaContent: { type: 'b' },
            additionalParameters: { type: 's' }
        });
        return result;
    };
    return KalturaCielo24JobProviderData;
}(KalturaIntegrationJobProviderData));
export { KalturaCielo24JobProviderData };
if (false) {
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.entryId;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.captionAssetFormats;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.priority;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.fidelity;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.username;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.password;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.baseUrl;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.spokenLanguage;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.replaceMediaContent;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.additionalParameters;
}
typesMappingStorage['KalturaCielo24JobProviderData'] = KalturaCielo24JobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNpZWxvMjRKb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMvSCxJQUFBO0lBQW1ELHlEQUFpQztJQWNoRix1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0csUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0csUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ25HLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0EzREw7RUFtQm1ELGlDQUFpQyxFQXlDbkYsQ0FBQTtBQXpDRCx5Q0F5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDaWVsbzI0UHJpb3JpdHkgfSBmcm9tICcuL0thbHR1cmFDaWVsbzI0UHJpb3JpdHknO1xuaW1wb3J0IHsgS2FsdHVyYUNpZWxvMjRGaWRlbGl0eSB9IGZyb20gJy4vS2FsdHVyYUNpZWxvMjRGaWRlbGl0eSc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNpZWxvMjRKb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0Y2FwdGlvbkFzc2V0Rm9ybWF0cz8gOiBzdHJpbmc7XG5cdHByaW9yaXR5PyA6IEthbHR1cmFDaWVsbzI0UHJpb3JpdHk7XG5cdGZpZGVsaXR5PyA6IEthbHR1cmFDaWVsbzI0RmlkZWxpdHk7XG5cdHNwb2tlbkxhbmd1YWdlPyA6IEthbHR1cmFMYW5ndWFnZTtcblx0cmVwbGFjZU1lZGlhQ29udGVudD8gOiBib29sZWFuO1xuXHRhZGRpdGlvbmFsUGFyYW1ldGVycz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldEZvcm1hdHMgOiBzdHJpbmc7XG5cdHByaW9yaXR5IDogS2FsdHVyYUNpZWxvMjRQcmlvcml0eTtcblx0ZmlkZWxpdHkgOiBLYWx0dXJhQ2llbG8yNEZpZGVsaXR5O1xuXHRyZWFkb25seSB1c2VybmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFzc3dvcmQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGJhc2VVcmwgOiBzdHJpbmc7XG5cdHNwb2tlbkxhbmd1YWdlIDogS2FsdHVyYUxhbmd1YWdlO1xuXHRyZXBsYWNlTWVkaWFDb250ZW50IDogYm9vbGVhbjtcblx0YWRkaXRpb25hbFBhcmFtZXRlcnMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0Rm9ybWF0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDaWVsbzI0UHJpb3JpdHksIHN1YlR5cGUgOiAnS2FsdHVyYUNpZWxvMjRQcmlvcml0eScgfSxcblx0XHRcdFx0ZmlkZWxpdHkgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2llbG8yNEZpZGVsaXR5LCBzdWJUeXBlIDogJ0thbHR1cmFDaWVsbzI0RmlkZWxpdHknIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRiYXNlVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3Bva2VuTGFuZ3VhZ2UgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9LFxuXHRcdFx0XHRyZXBsYWNlTWVkaWFDb250ZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGFkZGl0aW9uYWxQYXJhbWV0ZXJzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhQ2llbG8yNEpvYlByb3ZpZGVyRGF0YTsiXX0=