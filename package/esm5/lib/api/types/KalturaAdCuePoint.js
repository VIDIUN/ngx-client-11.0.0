/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAdProtocolType } from './KalturaAdProtocolType';
import { KalturaAdType } from './KalturaAdType';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaAdCuePointArgs() { }
/** @type {?|undefined} */
KalturaAdCuePointArgs.prototype.protocolType;
/** @type {?|undefined} */
KalturaAdCuePointArgs.prototype.sourceUrl;
/** @type {?|undefined} */
KalturaAdCuePointArgs.prototype.adType;
/** @type {?|undefined} */
KalturaAdCuePointArgs.prototype.title;
/** @type {?|undefined} */
KalturaAdCuePointArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaAdCuePointArgs.prototype.duration;
var KalturaAdCuePoint = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAdCuePoint, _super);
    function KalturaAdCuePoint(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAdCuePoint.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAdCuePoint' },
            protocolType: { type: 'es', subTypeConstructor: KalturaAdProtocolType, subType: 'KalturaAdProtocolType' },
            sourceUrl: { type: 's' },
            adType: { type: 'es', subTypeConstructor: KalturaAdType, subType: 'KalturaAdType' },
            title: { type: 's' },
            endTime: { type: 'n' },
            duration: { type: 'n' }
        });
        return result;
    };
    return KalturaAdCuePoint;
}(KalturaCuePoint));
export { KalturaAdCuePoint };
if (false) {
    /** @type {?} */
    KalturaAdCuePoint.prototype.protocolType;
    /** @type {?} */
    KalturaAdCuePoint.prototype.sourceUrl;
    /** @type {?} */
    KalturaAdCuePoint.prototype.adType;
    /** @type {?} */
    KalturaAdCuePoint.prototype.title;
    /** @type {?} */
    KalturaAdCuePoint.prototype.endTime;
    /** @type {?} */
    KalturaAdCuePoint.prototype.duration;
}
typesMappingStorage['KalturaAdCuePoint'] = KalturaAdCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFkQ3VlUG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBZEN1ZVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVl6RSxJQUFBO0lBQXVDLDZDQUFlO0lBU2xELDJCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDN0csU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3ZGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NEJBOUNMO0VBZ0J1QyxlQUFlLEVBK0JyRCxDQUFBO0FBL0JELDZCQStCQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWRQcm90b2NvbFR5cGUgfSBmcm9tICcuL0thbHR1cmFBZFByb3RvY29sVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQWRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCwgS2FsdHVyYUN1ZVBvaW50QXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWRDdWVQb2ludEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50QXJncyB7XG4gICAgcHJvdG9jb2xUeXBlPyA6IEthbHR1cmFBZFByb3RvY29sVHlwZTtcblx0c291cmNlVXJsPyA6IHN0cmluZztcblx0YWRUeXBlPyA6IEthbHR1cmFBZFR5cGU7XG5cdHRpdGxlPyA6IHN0cmluZztcblx0ZW5kVGltZT8gOiBudW1iZXI7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFkQ3VlUG9pbnQgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnQge1xuXG4gICAgcHJvdG9jb2xUeXBlIDogS2FsdHVyYUFkUHJvdG9jb2xUeXBlO1xuXHRzb3VyY2VVcmwgOiBzdHJpbmc7XG5cdGFkVHlwZSA6IEthbHR1cmFBZFR5cGU7XG5cdHRpdGxlIDogc3RyaW5nO1xuXHRlbmRUaW1lIDogbnVtYmVyO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFkQ3VlUG9pbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFkQ3VlUG9pbnQnIH0sXG5cdFx0XHRcdHByb3RvY29sVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBZFByb3RvY29sVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQWRQcm90b2NvbFR5cGUnIH0sXG5cdFx0XHRcdHNvdXJjZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBZFR5cGUnIH0sXG5cdFx0XHRcdHRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFkQ3VlUG9pbnQnXSA9IEthbHR1cmFBZEN1ZVBvaW50OyJdfQ==