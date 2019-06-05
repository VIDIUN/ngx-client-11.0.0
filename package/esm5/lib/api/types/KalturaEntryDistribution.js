/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaEntryDistributionSunStatus } from './KalturaEntryDistributionSunStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEntryDistributionArgs() { }
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.distributionProfileId;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.thumbAssetIds;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.flavorAssetIds;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.assetIds;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.sunrise;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.sunset;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.validationErrors;
var KalturaEntryDistribution = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryDistribution, _super);
    function KalturaEntryDistribution(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.validationErrors === 'undefined')
            _this.validationErrors = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEntryDistribution.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryDistribution' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            submittedAt: { type: 'd', readOnly: true },
            entryId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            distributionProfileId: { type: 'n' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryDistributionStatus, subType: 'KalturaEntryDistributionStatus' },
            sunStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryDistributionSunStatus, subType: 'KalturaEntryDistributionSunStatus' },
            dirtyStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryDistributionFlag, subType: 'KalturaEntryDistributionFlag' },
            thumbAssetIds: { type: 's' },
            flavorAssetIds: { type: 's' },
            assetIds: { type: 's' },
            sunrise: { type: 'd' },
            sunset: { type: 'd' },
            remoteId: { type: 's', readOnly: true },
            plays: { type: 'n', readOnly: true },
            views: { type: 'n', readOnly: true },
            validationErrors: { type: 'a', subTypeConstructor: KalturaDistributionValidationError, subType: 'KalturaDistributionValidationError' },
            errorType: { type: 'en', readOnly: true, subTypeConstructor: KalturaBatchJobErrorTypes, subType: 'KalturaBatchJobErrorTypes' },
            errorNumber: { type: 'n', readOnly: true },
            errorDescription: { type: 's', readOnly: true },
            hasSubmitResultsLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasSubmitSentDataLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasUpdateResultsLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasUpdateSentDataLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasDeleteResultsLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasDeleteSentDataLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaEntryDistribution;
}(KalturaObjectBase));
export { KalturaEntryDistribution };
if (false) {
    /** @type {?} */
    KalturaEntryDistribution.prototype.id;
    /** @type {?} */
    KalturaEntryDistribution.prototype.createdAt;
    /** @type {?} */
    KalturaEntryDistribution.prototype.updatedAt;
    /** @type {?} */
    KalturaEntryDistribution.prototype.submittedAt;
    /** @type {?} */
    KalturaEntryDistribution.prototype.entryId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.partnerId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.distributionProfileId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.status;
    /** @type {?} */
    KalturaEntryDistribution.prototype.sunStatus;
    /** @type {?} */
    KalturaEntryDistribution.prototype.dirtyStatus;
    /** @type {?} */
    KalturaEntryDistribution.prototype.thumbAssetIds;
    /** @type {?} */
    KalturaEntryDistribution.prototype.flavorAssetIds;
    /** @type {?} */
    KalturaEntryDistribution.prototype.assetIds;
    /** @type {?} */
    KalturaEntryDistribution.prototype.sunrise;
    /** @type {?} */
    KalturaEntryDistribution.prototype.sunset;
    /** @type {?} */
    KalturaEntryDistribution.prototype.remoteId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.plays;
    /** @type {?} */
    KalturaEntryDistribution.prototype.views;
    /** @type {?} */
    KalturaEntryDistribution.prototype.validationErrors;
    /** @type {?} */
    KalturaEntryDistribution.prototype.errorType;
    /** @type {?} */
    KalturaEntryDistribution.prototype.errorNumber;
    /** @type {?} */
    KalturaEntryDistribution.prototype.errorDescription;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasSubmitResultsLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasSubmitSentDataLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasUpdateResultsLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasUpdateSentDataLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasDeleteResultsLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasDeleteSentDataLog;
}
typesMappingStorage['KalturaEntryDistribution'] = KalturaEntryDistribution;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlEaXN0cmlidXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsSUFBQTtJQUE4QyxvREFBaUI7SUErQjNELGtDQUFZLElBQW9DO1FBQWhELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztLQUNoRjs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixF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RyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hJLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN2SSxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDL0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0FqR0w7RUFzQjhDLGlCQUFpQixFQTRFOUQsQ0FBQTtBQTVFRCxvQ0E0RUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3IgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3InO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcyB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcyc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGlvblByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdHRodW1iQXNzZXRJZHM/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkcz8gOiBzdHJpbmc7XG5cdGFzc2V0SWRzPyA6IHN0cmluZztcblx0c3VucmlzZT8gOiBEYXRlO1xuXHRzdW5zZXQ/IDogRGF0ZTtcblx0dmFsaWRhdGlvbkVycm9ycz8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBzdWJtaXR0ZWRBdCA6IERhdGU7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXM7XG5cdHJlYWRvbmx5IHN1blN0YXR1cyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cztcblx0cmVhZG9ubHkgZGlydHlTdGF0dXMgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnO1xuXHR0aHVtYkFzc2V0SWRzIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkcyA6IHN0cmluZztcblx0YXNzZXRJZHMgOiBzdHJpbmc7XG5cdHN1bnJpc2UgOiBEYXRlO1xuXHRzdW5zZXQgOiBEYXRlO1xuXHRyZWFkb25seSByZW1vdGVJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGxheXMgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHZpZXdzIDogbnVtYmVyO1xuXHR2YWxpZGF0aW9uRXJyb3JzIDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcltdO1xuXHRyZWFkb25seSBlcnJvclR5cGUgOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzO1xuXHRyZWFkb25seSBlcnJvck51bWJlciA6IG51bWJlcjtcblx0cmVhZG9ubHkgZXJyb3JEZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgaGFzU3VibWl0UmVzdWx0c0xvZyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJlYWRvbmx5IGhhc1N1Ym1pdFNlbnREYXRhTG9nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgaGFzVXBkYXRlUmVzdWx0c0xvZyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJlYWRvbmx5IGhhc1VwZGF0ZVNlbnREYXRhTG9nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgaGFzRGVsZXRlUmVzdWx0c0xvZyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJlYWRvbmx5IGhhc0RlbGV0ZVNlbnREYXRhTG9nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdWJtaXR0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cycgfSxcblx0XHRcdFx0c3VuU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3VuU3RhdHVzJyB9LFxuXHRcdFx0XHRkaXJ0eVN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN1bnJpc2UgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3Vuc2V0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHJlbW90ZUlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGxheXMgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR2aWV3cyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHZhbGlkYXRpb25FcnJvcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3IsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcicgfSxcblx0XHRcdFx0ZXJyb3JUeXBlIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMnIH0sXG5cdFx0XHRcdGVycm9yTnVtYmVyIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZXJyb3JEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGhhc1N1Ym1pdFJlc3VsdHNMb2cgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0aGFzU3VibWl0U2VudERhdGFMb2cgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0aGFzVXBkYXRlUmVzdWx0c0xvZyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRoYXNVcGRhdGVTZW50RGF0YUxvZyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRoYXNEZWxldGVSZXN1bHRzTG9nIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGhhc0RlbGV0ZVNlbnREYXRhTG9nIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbiddID0gS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uOyJdfQ==