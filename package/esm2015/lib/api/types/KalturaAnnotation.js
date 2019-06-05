/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaAnnotationArgs() { }
/** @type {?|undefined} */
KalturaAnnotationArgs.prototype.parentId;
/** @type {?|undefined} */
KalturaAnnotationArgs.prototype.text;
/** @type {?|undefined} */
KalturaAnnotationArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaAnnotationArgs.prototype.isPublic;
/** @type {?|undefined} */
KalturaAnnotationArgs.prototype.searchableOnEntry;
export class KalturaAnnotation extends KalturaCuePoint {
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
            objectType: { type: 'c', default: 'KalturaAnnotation' },
            parentId: { type: 's' },
            text: { type: 's' },
            endTime: { type: 'n' },
            duration: { type: 'n', readOnly: true },
            depth: { type: 'n', readOnly: true },
            childrenCount: { type: 'n', readOnly: true },
            directChildrenCount: { type: 'n', readOnly: true },
            isPublic: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            searchableOnEntry: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAnnotation.prototype.parentId;
    /** @type {?} */
    KalturaAnnotation.prototype.text;
    /** @type {?} */
    KalturaAnnotation.prototype.endTime;
    /** @type {?} */
    KalturaAnnotation.prototype.duration;
    /** @type {?} */
    KalturaAnnotation.prototype.depth;
    /** @type {?} */
    KalturaAnnotation.prototype.childrenCount;
    /** @type {?} */
    KalturaAnnotation.prototype.directChildrenCount;
    /** @type {?} */
    KalturaAnnotation.prototype.isPublic;
    /** @type {?} */
    KalturaAnnotation.prototype.searchableOnEntry;
}
typesMappingStorage['KalturaAnnotation'] = KalturaAnnotation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFubm90YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBbm5vdGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBdUIsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV3pFLE1BQU0sd0JBQXlCLFNBQVEsZUFBZTs7OztJQVlsRCxZQUFZLElBQTZCO1FBRXJDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3ZDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMvQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyRCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQzNHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCwgS2FsdHVyYUN1ZVBvaW50QXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQW5ub3RhdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50QXJncyB7XG4gICAgcGFyZW50SWQ/IDogc3RyaW5nO1xuXHR0ZXh0PyA6IHN0cmluZztcblx0ZW5kVGltZT8gOiBudW1iZXI7XG5cdGlzUHVibGljPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNlYXJjaGFibGVPbkVudHJ5PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBbm5vdGF0aW9uIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50IHtcblxuICAgIHBhcmVudElkIDogc3RyaW5nO1xuXHR0ZXh0IDogc3RyaW5nO1xuXHRlbmRUaW1lIDogbnVtYmVyO1xuXHRyZWFkb25seSBkdXJhdGlvbiA6IG51bWJlcjtcblx0cmVhZG9ubHkgZGVwdGggOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNoaWxkcmVuQ291bnQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGRpcmVjdENoaWxkcmVuQ291bnQgOiBudW1iZXI7XG5cdGlzUHVibGljIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c2VhcmNoYWJsZU9uRW50cnkgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQW5ub3RhdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQW5ub3RhdGlvbicgfSxcblx0XHRcdFx0cGFyZW50SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGV4dCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVwdGggOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjaGlsZHJlbkNvdW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGlyZWN0Q2hpbGRyZW5Db3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzUHVibGljIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRzZWFyY2hhYmxlT25FbnRyeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFubm90YXRpb24nXSA9IEthbHR1cmFBbm5vdGF0aW9uOyJdfQ==