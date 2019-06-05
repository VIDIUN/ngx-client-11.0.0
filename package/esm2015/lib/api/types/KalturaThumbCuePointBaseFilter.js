/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaThumbCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.descriptionLike;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.descriptionMultiLikeOr;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.descriptionMultiLikeAnd;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.titleLike;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.titleMultiLikeOr;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.titleMultiLikeAnd;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.subTypeEqual;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.subTypeIn;
export class KalturaThumbCuePointBaseFilter extends KalturaCuePointFilter {
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
            objectType: { type: 'c', default: 'KalturaThumbCuePointBaseFilter' },
            descriptionLike: { type: 's' },
            descriptionMultiLikeOr: { type: 's' },
            descriptionMultiLikeAnd: { type: 's' },
            titleLike: { type: 's' },
            titleMultiLikeOr: { type: 's' },
            titleMultiLikeAnd: { type: 's' },
            subTypeEqual: { type: 'en', subTypeConstructor: KalturaThumbCuePointSubType, subType: 'KalturaThumbCuePointSubType' },
            subTypeIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.descriptionLike;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.descriptionMultiLikeOr;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.descriptionMultiLikeAnd;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.titleLike;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.titleMultiLikeOr;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.titleMultiLikeAnd;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.subTypeEqual;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.subTypeIn;
}
typesMappingStorage['KalturaThumbCuePointBaseFilter'] = KalturaThumbCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iQ3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJDdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMzRixNQUFNLHFDQUFzQyxTQUFRLHFCQUFxQjs7OztJQVdyRSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3pILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGUgfSBmcm9tICcuL0thbHR1cmFUaHVtYkN1ZVBvaW50U3ViVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIsIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRodW1iQ3VlUG9pbnRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIHtcbiAgICBkZXNjcmlwdGlvbkxpa2U/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb25NdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHR0aXRsZUxpa2U/IDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGl0bGVNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRzdWJUeXBlRXF1YWw/IDogS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlO1xuXHRzdWJUeXBlSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGh1bWJDdWVQb2ludEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIge1xuXG4gICAgZGVzY3JpcHRpb25MaWtlIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0dGl0bGVMaWtlIDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0c3ViVHlwZUVxdWFsIDogS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlO1xuXHRzdWJUeXBlSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYkN1ZVBvaW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJDdWVQb2ludEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbk11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZU11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN1YlR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYkN1ZVBvaW50U3ViVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGUnIH0sXG5cdFx0XHRcdHN1YlR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGh1bWJDdWVQb2ludEJhc2VGaWx0ZXInXSA9IEthbHR1cmFUaHVtYkN1ZVBvaW50QmFzZUZpbHRlcjsiXX0=