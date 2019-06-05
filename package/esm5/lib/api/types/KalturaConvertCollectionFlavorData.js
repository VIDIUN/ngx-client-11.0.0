/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaConvertCollectionFlavorDataArgs() { }
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.flavorParamsOutputId;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.videoBitrate;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.audioBitrate;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.destFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.destFileSyncRemoteUrl;
var KalturaConvertCollectionFlavorData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvertCollectionFlavorData, _super);
    function KalturaConvertCollectionFlavorData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConvertCollectionFlavorData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertCollectionFlavorData' },
            flavorAssetId: { type: 's' },
            flavorParamsOutputId: { type: 'n' },
            readyBehavior: { type: 'n' },
            videoBitrate: { type: 'n' },
            audioBitrate: { type: 'n' },
            destFileSyncLocalPath: { type: 's' },
            destFileSyncRemoteUrl: { type: 's' }
        });
        return result;
    };
    return KalturaConvertCollectionFlavorData;
}(KalturaObjectBase));
export { KalturaConvertCollectionFlavorData };
if (false) {
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.flavorParamsOutputId;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.readyBehavior;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.videoBitrate;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.audioBitrate;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.destFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.destFileSyncRemoteUrl;
}
typesMappingStorage['KalturaConvertCollectionFlavorData'] = KalturaConvertCollectionFlavorData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsSUFBQTtJQUF3RCw4REFBaUI7SUFVckUsNENBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzdCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkNBL0NMO0VBZXdELGlCQUFpQixFQWlDeEUsQ0FBQTtBQWpDRCw4Q0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zT3V0cHV0SWQ/IDogbnVtYmVyO1xuXHRyZWFkeUJlaGF2aW9yPyA6IG51bWJlcjtcblx0dmlkZW9CaXRyYXRlPyA6IG51bWJlcjtcblx0YXVkaW9CaXRyYXRlPyA6IG51bWJlcjtcblx0ZGVzdEZpbGVTeW5jTG9jYWxQYXRoPyA6IHN0cmluZztcblx0ZGVzdEZpbGVTeW5jUmVtb3RlVXJsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc091dHB1dElkIDogbnVtYmVyO1xuXHRyZWFkeUJlaGF2aW9yIDogbnVtYmVyO1xuXHR2aWRlb0JpdHJhdGUgOiBudW1iZXI7XG5cdGF1ZGlvQml0cmF0ZSA6IG51bWJlcjtcblx0ZGVzdEZpbGVTeW5jTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRkZXN0RmlsZVN5bmNSZW1vdGVVcmwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkZsYXZvckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YScgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNPdXRwdXRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWFkeUJlaGF2aW9yIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZGVvQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0JpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVzdEZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc3RGaWxlU3luY1JlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhJ10gPSBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhOyJdfQ==