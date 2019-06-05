/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAdCuePoint extends KalturaCuePoint {
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
            objectType: { type: 'c', default: 'KalturaAdCuePoint' },
            protocolType: { type: 'es', subTypeConstructor: KalturaAdProtocolType, subType: 'KalturaAdProtocolType' },
            sourceUrl: { type: 's' },
            adType: { type: 'es', subTypeConstructor: KalturaAdType, subType: 'KalturaAdType' },
            title: { type: 's' },
            endTime: { type: 'n' },
            duration: { type: 'n' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFkQ3VlUG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBZEN1ZVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXpFLE1BQU0sd0JBQXlCLFNBQVEsZUFBZTs7OztJQVNsRCxZQUFZLElBQTZCO1FBRXJDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM3RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDdkYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBZFByb3RvY29sVHlwZSB9IGZyb20gJy4vS2FsdHVyYUFkUHJvdG9jb2xUeXBlJztcbmltcG9ydCB7IEthbHR1cmFBZFR5cGUgfSBmcm9tICcuL0thbHR1cmFBZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50LCBLYWx0dXJhQ3VlUG9pbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBZEN1ZVBvaW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRBcmdzIHtcbiAgICBwcm90b2NvbFR5cGU/IDogS2FsdHVyYUFkUHJvdG9jb2xUeXBlO1xuXHRzb3VyY2VVcmw/IDogc3RyaW5nO1xuXHRhZFR5cGU/IDogS2FsdHVyYUFkVHlwZTtcblx0dGl0bGU/IDogc3RyaW5nO1xuXHRlbmRUaW1lPyA6IG51bWJlcjtcblx0ZHVyYXRpb24/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWRDdWVQb2ludCBleHRlbmRzIEthbHR1cmFDdWVQb2ludCB7XG5cbiAgICBwcm90b2NvbFR5cGUgOiBLYWx0dXJhQWRQcm90b2NvbFR5cGU7XG5cdHNvdXJjZVVybCA6IHN0cmluZztcblx0YWRUeXBlIDogS2FsdHVyYUFkVHlwZTtcblx0dGl0bGUgOiBzdHJpbmc7XG5cdGVuZFRpbWUgOiBudW1iZXI7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWRDdWVQb2ludEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWRDdWVQb2ludCcgfSxcblx0XHRcdFx0cHJvdG9jb2xUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFkUHJvdG9jb2xUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBZFByb3RvY29sVHlwZScgfSxcblx0XHRcdFx0c291cmNlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUFkVHlwZScgfSxcblx0XHRcdFx0dGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kVGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWRDdWVQb2ludCddID0gS2FsdHVyYUFkQ3VlUG9pbnQ7Il19