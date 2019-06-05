/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaEventCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEventCuePointBaseFilterArgs.prototype.eventTypeEqual;
/** @type {?|undefined} */
KalturaEventCuePointBaseFilterArgs.prototype.eventTypeIn;
export class KalturaEventCuePointBaseFilter extends KalturaCuePointFilter {
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
            objectType: { type: 'c', default: 'KalturaEventCuePointBaseFilter' },
            eventTypeEqual: { type: 'es', subTypeConstructor: KalturaEventType, subType: 'KalturaEventType' },
            eventTypeIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventCuePointBaseFilter.prototype.eventTypeEqual;
    /** @type {?} */
    KalturaEventCuePointBaseFilter.prototype.eventTypeIn;
}
typesMappingStorage['KalturaEventCuePointBaseFilter'] = KalturaEventCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXZlbnRDdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixNQUFNLHFDQUFzQyxTQUFRLHFCQUFxQjs7OztJQUtyRSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNyRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIsIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIHtcbiAgICBldmVudFR5cGVFcXVhbD8gOiBLYWx0dXJhRXZlbnRUeXBlO1xuXHRldmVudFR5cGVJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFdmVudEN1ZVBvaW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlciB7XG5cbiAgICBldmVudFR5cGVFcXVhbCA6IEthbHR1cmFFdmVudFR5cGU7XG5cdGV2ZW50VHlwZUluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXZlbnRDdWVQb2ludEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRldmVudFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50VHlwZScgfSxcblx0XHRcdFx0ZXZlbnRUeXBlSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRXZlbnRDdWVQb2ludEJhc2VGaWx0ZXI7Il19