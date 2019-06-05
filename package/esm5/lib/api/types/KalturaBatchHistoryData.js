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
export function KalturaBatchHistoryDataArgs() { }
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.schedulerId;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.workerId;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.batchIndex;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.timeStamp;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.message;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.errType;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.errNumber;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.hostName;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.sessionId;
var KalturaBatchHistoryData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBatchHistoryData, _super);
    function KalturaBatchHistoryData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBatchHistoryData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBatchHistoryData' },
            schedulerId: { type: 'n' },
            workerId: { type: 'n' },
            batchIndex: { type: 'n' },
            timeStamp: { type: 'n' },
            message: { type: 's' },
            errType: { type: 'n' },
            errNumber: { type: 'n' },
            hostName: { type: 's' },
            sessionId: { type: 's' }
        });
        return result;
    };
    return KalturaBatchHistoryData;
}(KalturaObjectBase));
export { KalturaBatchHistoryData };
if (false) {
    /** @type {?} */
    KalturaBatchHistoryData.prototype.schedulerId;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.workerId;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.batchIndex;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.timeStamp;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.message;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.errType;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.errNumber;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.hostName;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.sessionId;
}
typesMappingStorage['KalturaBatchHistoryData'] = KalturaBatchHistoryData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXRjaEhpc3RvcnlEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbEYsSUFBQTtJQUE2QyxtREFBaUI7SUFZMUQsaUNBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQXJETDtFQWlCNkMsaUJBQWlCLEVBcUM3RCxDQUFBO0FBckNELG1DQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhdGNoSGlzdG9yeURhdGFBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgc2NoZWR1bGVySWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJJZD8gOiBudW1iZXI7XG5cdGJhdGNoSW5kZXg/IDogbnVtYmVyO1xuXHR0aW1lU3RhbXA/IDogbnVtYmVyO1xuXHRtZXNzYWdlPyA6IHN0cmluZztcblx0ZXJyVHlwZT8gOiBudW1iZXI7XG5cdGVyck51bWJlcj8gOiBudW1iZXI7XG5cdGhvc3ROYW1lPyA6IHN0cmluZztcblx0c2Vzc2lvbklkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBzY2hlZHVsZXJJZCA6IG51bWJlcjtcblx0d29ya2VySWQgOiBudW1iZXI7XG5cdGJhdGNoSW5kZXggOiBudW1iZXI7XG5cdHRpbWVTdGFtcCA6IG51bWJlcjtcblx0bWVzc2FnZSA6IHN0cmluZztcblx0ZXJyVHlwZSA6IG51bWJlcjtcblx0ZXJyTnVtYmVyIDogbnVtYmVyO1xuXHRob3N0TmFtZSA6IHN0cmluZztcblx0c2Vzc2lvbklkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YScgfSxcblx0XHRcdFx0c2NoZWR1bGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmF0Y2hJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aW1lU3RhbXAgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWVzc2FnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJUeXBlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVyck51bWJlciA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRob3N0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXNzaW9uSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEnXSA9IEthbHR1cmFCYXRjaEhpc3RvcnlEYXRhOyJdfQ==