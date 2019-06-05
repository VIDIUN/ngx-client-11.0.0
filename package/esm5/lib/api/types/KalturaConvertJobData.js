/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDestFileSyncDescriptor } from './KalturaDestFileSyncDescriptor';
import { KalturaConvartableJobData } from './KalturaConvartableJobData';
/**
 * @record
 */
export function KalturaConvertJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.destFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.destFileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.logFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.logFileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.remoteMediaId;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.customData;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.extraDestFileSyncs;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.engineMessage;
var KalturaConvertJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvertJobData, _super);
    function KalturaConvertJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.extraDestFileSyncs === 'undefined')
            _this.extraDestFileSyncs = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaConvertJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertJobData' },
            destFileSyncLocalPath: { type: 's' },
            destFileSyncRemoteUrl: { type: 's' },
            logFileSyncLocalPath: { type: 's' },
            logFileSyncRemoteUrl: { type: 's' },
            flavorAssetId: { type: 's' },
            remoteMediaId: { type: 's' },
            customData: { type: 's' },
            extraDestFileSyncs: { type: 'a', subTypeConstructor: KalturaDestFileSyncDescriptor, subType: 'KalturaDestFileSyncDescriptor' },
            engineMessage: { type: 's' }
        });
        return result;
    };
    return KalturaConvertJobData;
}(KalturaConvartableJobData));
export { KalturaConvertJobData };
if (false) {
    /** @type {?} */
    KalturaConvertJobData.prototype.destFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertJobData.prototype.destFileSyncRemoteUrl;
    /** @type {?} */
    KalturaConvertJobData.prototype.logFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertJobData.prototype.logFileSyncRemoteUrl;
    /** @type {?} */
    KalturaConvertJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaConvertJobData.prototype.remoteMediaId;
    /** @type {?} */
    KalturaConvertJobData.prototype.customData;
    /** @type {?} */
    KalturaConvertJobData.prototype.extraDestFileSyncs;
    /** @type {?} */
    KalturaConvertJobData.prototype.engineMessage;
}
typesMappingStorage['KalturaConvertJobData'] = KalturaConvertJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVydEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV2RyxJQUFBO0lBQTJDLGlEQUF5QjtJQVloRSwrQkFBWSxJQUFpQztRQUE3QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsa0JBQWtCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQzs7S0FDcEY7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsSSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBdkRMO0VBa0IyQyx5QkFBeUIsRUFzQ25FLENBQUE7QUF0Q0QsaUNBc0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yIH0gZnJvbSAnLi9LYWx0dXJhRGVzdEZpbGVTeW5jRGVzY3JpcHRvcic7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhLCBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZlcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB7XG4gICAgZGVzdEZpbGVTeW5jTG9jYWxQYXRoPyA6IHN0cmluZztcblx0ZGVzdEZpbGVTeW5jUmVtb3RlVXJsPyA6IHN0cmluZztcblx0bG9nRmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRsb2dGaWxlU3luY1JlbW90ZVVybD8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRyZW1vdGVNZWRpYUlkPyA6IHN0cmluZztcblx0Y3VzdG9tRGF0YT8gOiBzdHJpbmc7XG5cdGV4dHJhRGVzdEZpbGVTeW5jcz8gOiBLYWx0dXJhRGVzdEZpbGVTeW5jRGVzY3JpcHRvcltdO1xuXHRlbmdpbmVNZXNzYWdlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSB7XG5cbiAgICBkZXN0RmlsZVN5bmNMb2NhbFBhdGggOiBzdHJpbmc7XG5cdGRlc3RGaWxlU3luY1JlbW90ZVVybCA6IHN0cmluZztcblx0bG9nRmlsZVN5bmNMb2NhbFBhdGggOiBzdHJpbmc7XG5cdGxvZ0ZpbGVTeW5jUmVtb3RlVXJsIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRyZW1vdGVNZWRpYUlkIDogc3RyaW5nO1xuXHRjdXN0b21EYXRhIDogc3RyaW5nO1xuXHRleHRyYURlc3RGaWxlU3luY3MgOiBLYWx0dXJhRGVzdEZpbGVTeW5jRGVzY3JpcHRvcltdO1xuXHRlbmdpbmVNZXNzYWdlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29udmVydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5leHRyYURlc3RGaWxlU3luY3MgPT09ICd1bmRlZmluZWQnKSB0aGlzLmV4dHJhRGVzdEZpbGVTeW5jcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJ0Sm9iRGF0YScgfSxcblx0XHRcdFx0ZGVzdEZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc3RGaWxlU3luY1JlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsb2dGaWxlU3luY0xvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsb2dGaWxlU3luY1JlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZU1lZGlhSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VzdG9tRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHRyYURlc3RGaWxlU3luY3MgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yLCBzdWJUeXBlIDogJ0thbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yJyB9LFxuXHRcdFx0XHRlbmdpbmVNZXNzYWdlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJ0Sm9iRGF0YSddID0gS2FsdHVyYUNvbnZlcnRKb2JEYXRhOyJdfQ==