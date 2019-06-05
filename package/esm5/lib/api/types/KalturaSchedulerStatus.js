/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatusType } from './KalturaSchedulerStatusType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSchedulerStatusArgs() { }
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.schedulerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.workerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.workerType;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.type;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.value;
var KalturaSchedulerStatus = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSchedulerStatus, _super);
    function KalturaSchedulerStatus(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSchedulerStatus.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSchedulerStatus' },
            id: { type: 'n', readOnly: true },
            schedulerConfiguredId: { type: 'n' },
            workerConfiguredId: { type: 'n' },
            workerType: { type: 'es', subTypeConstructor: KalturaBatchJobType, subType: 'KalturaBatchJobType' },
            type: { type: 'en', subTypeConstructor: KalturaSchedulerStatusType, subType: 'KalturaSchedulerStatusType' },
            value: { type: 'n' },
            schedulerId: { type: 'n', readOnly: true },
            workerId: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaSchedulerStatus;
}(KalturaObjectBase));
export { KalturaSchedulerStatus };
if (false) {
    /** @type {?} */
    KalturaSchedulerStatus.prototype.id;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.schedulerConfiguredId;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.workerConfiguredId;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.workerType;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.type;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.value;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.schedulerId;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.workerId;
}
typesMappingStorage['KalturaSchedulerStatus'] = KalturaSchedulerStatus;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlclN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlclN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQTRDLGtEQUFpQjtJQVd6RCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3ZHLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9HLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzdDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNqQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQWpETDtFQWU0QyxpQkFBaUIsRUFtQzVELENBQUE7QUFuQ0Qsa0NBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZXJTdGF0dXNUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVyU3RhdHVzVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlclN0YXR1c0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBzY2hlZHVsZXJDb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJDb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJUeXBlPyA6IEthbHR1cmFCYXRjaEpvYlR5cGU7XG5cdHR5cGU/IDogS2FsdHVyYVNjaGVkdWxlclN0YXR1c1R5cGU7XG5cdHZhbHVlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlclN0YXR1cyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRzY2hlZHVsZXJDb25maWd1cmVkSWQgOiBudW1iZXI7XG5cdHdvcmtlckNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0d29ya2VyVHlwZSA6IEthbHR1cmFCYXRjaEpvYlR5cGU7XG5cdHR5cGUgOiBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzVHlwZTtcblx0dmFsdWUgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHNjaGVkdWxlcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSB3b3JrZXJJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlclN0YXR1c0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVyU3RhdHVzJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHNjaGVkdWxlckNvbmZpZ3VyZWRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3b3JrZXJDb25maWd1cmVkSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYlR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iVHlwZScgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZXJTdGF0dXNUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZXJTdGF0dXNUeXBlJyB9LFxuXHRcdFx0XHR2YWx1ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHdvcmtlcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlclN0YXR1cyddID0gS2FsdHVyYVNjaGVkdWxlclN0YXR1czsiXX0=