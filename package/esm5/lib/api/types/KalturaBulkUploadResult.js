/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResultStatus } from './KalturaBulkUploadResultStatus';
import { KalturaBulkUploadAction } from './KalturaBulkUploadAction';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadPluginData } from './KalturaBulkUploadPluginData';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBulkUploadResultArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.bulkUploadJobId;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.lineIndex;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.status;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.action;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.objectStatus;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.bulkUploadResultObjectType;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.rowData;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.objectErrorDescription;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.pluginsData;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.errorDescription;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.errorCode;
/** @type {?|undefined} */
KalturaBulkUploadResultArgs.prototype.errorType;
var KalturaBulkUploadResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResult, _super);
    function KalturaBulkUploadResult(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.pluginsData === 'undefined')
            _this.pluginsData = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResult' },
            id: { type: 'n', readOnly: true },
            bulkUploadJobId: { type: 'n' },
            lineIndex: { type: 'n' },
            partnerId: { type: 'n' },
            status: { type: 'es', subTypeConstructor: KalturaBulkUploadResultStatus, subType: 'KalturaBulkUploadResultStatus' },
            action: { type: 'es', subTypeConstructor: KalturaBulkUploadAction, subType: 'KalturaBulkUploadAction' },
            objectId: { type: 's' },
            objectStatus: { type: 'n' },
            bulkUploadResultObjectType: { type: 'es', subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' },
            rowData: { type: 's' },
            partnerData: { type: 's' },
            objectErrorDescription: { type: 's' },
            pluginsData: { type: 'a', subTypeConstructor: KalturaBulkUploadPluginData, subType: 'KalturaBulkUploadPluginData' },
            errorDescription: { type: 's' },
            errorCode: { type: 's' },
            errorType: { type: 'n' }
        });
        return result;
    };
    return KalturaBulkUploadResult;
}(KalturaObjectBase));
export { KalturaBulkUploadResult };
if (false) {
    /** @type {?} */
    KalturaBulkUploadResult.prototype.id;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.bulkUploadJobId;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.lineIndex;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.partnerId;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.status;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.action;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.objectId;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.objectStatus;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.bulkUploadResultObjectType;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.rowData;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.partnerData;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.objectErrorDescription;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.pluginsData;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.errorDescription;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.errorCode;
    /** @type {?} */
    KalturaBulkUploadResult.prototype.errorType;
}
typesMappingStorage['KalturaBulkUploadResult'] = KalturaBulkUploadResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmxGLElBQUE7SUFBNkMsbURBQWlCO0lBbUIxRCxpQ0FBWSxJQUFtQztRQUEvQyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztLQUN0RTs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN2SCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUMzRyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUN2SSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3ZILGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0E5RUw7RUEyQjZDLGlCQUFpQixFQW9EN0QsQ0FBQTtBQXBERCxtQ0FvREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkUGx1Z2luRGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRQbHVnaW5EYXRhJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBidWxrVXBsb2FkSm9iSWQ/IDogbnVtYmVyO1xuXHRsaW5lSW5kZXg/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRzdGF0dXM/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTdGF0dXM7XG5cdGFjdGlvbj8gOiBLYWx0dXJhQnVsa1VwbG9hZEFjdGlvbjtcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRvYmplY3RTdGF0dXM/IDogbnVtYmVyO1xuXHRidWxrVXBsb2FkUmVzdWx0T2JqZWN0VHlwZT8gOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGU7XG5cdHJvd0RhdGE/IDogc3RyaW5nO1xuXHRwYXJ0bmVyRGF0YT8gOiBzdHJpbmc7XG5cdG9iamVjdEVycm9yRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRwbHVnaW5zRGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZFBsdWdpbkRhdGFbXTtcblx0ZXJyb3JEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGVycm9yQ29kZT8gOiBzdHJpbmc7XG5cdGVycm9yVHlwZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdGJ1bGtVcGxvYWRKb2JJZCA6IG51bWJlcjtcblx0bGluZUluZGV4IDogbnVtYmVyO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U3RhdHVzO1xuXHRhY3Rpb24gOiBLYWx0dXJhQnVsa1VwbG9hZEFjdGlvbjtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdG9iamVjdFN0YXR1cyA6IG51bWJlcjtcblx0YnVsa1VwbG9hZFJlc3VsdE9iamVjdFR5cGUgOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGU7XG5cdHJvd0RhdGEgOiBzdHJpbmc7XG5cdHBhcnRuZXJEYXRhIDogc3RyaW5nO1xuXHRvYmplY3RFcnJvckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRwbHVnaW5zRGF0YSA6IEthbHR1cmFCdWxrVXBsb2FkUGx1Z2luRGF0YVtdO1xuXHRlcnJvckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRlcnJvckNvZGUgOiBzdHJpbmc7XG5cdGVycm9yVHlwZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wbHVnaW5zRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucGx1Z2luc0RhdGEgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRidWxrVXBsb2FkSm9iSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGluZUluZGV4IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFN0YXR1cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRBY3Rpb24nIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdFN0YXR1cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkUmVzdWx0T2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdHJvd0RhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lckRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0RXJyb3JEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwbHVnaW5zRGF0YSA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRQbHVnaW5EYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkUGx1Z2luRGF0YScgfSxcblx0XHRcdFx0ZXJyb3JEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvckNvZGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyb3JUeXBlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0J10gPSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdDsiXX0=