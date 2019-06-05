/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaESearchItemData } from './KalturaESearchItemData';
/**
 * @record
 */
export function KalturaESearchCuePointItemDataArgs() { }
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.cuePointType;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.id;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.name;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.text;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.tags;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.subType;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.question;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.answers;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.hint;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.explanation;
/** @type {?|undefined} */
KalturaESearchCuePointItemDataArgs.prototype.assetId;
export class KalturaESearchCuePointItemData extends KalturaESearchItemData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.tags === 'undefined')
            this.tags = [];
        if (typeof this.answers === 'undefined')
            this.answers = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCuePointItemData' },
            cuePointType: { type: 's' },
            id: { type: 's' },
            name: { type: 's' },
            text: { type: 's' },
            tags: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            startTime: { type: 's' },
            endTime: { type: 's' },
            subType: { type: 's' },
            question: { type: 's' },
            answers: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            hint: { type: 's' },
            explanation: { type: 's' },
            assetId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.cuePointType;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.id;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.name;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.text;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.tags;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.startTime;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.endTime;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.subType;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.question;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.answers;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.hint;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.explanation;
    /** @type {?} */
    KalturaESearchCuePointItemData.prototype.assetId;
}
typesMappingStorage['KalturaESearchCuePointItemData'] = KalturaESearchCuePointItemData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUI5RixNQUFNLHFDQUFzQyxTQUFRLHNCQUFzQjs7OztJQWdCdEUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQ3hEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDcEYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3ZGLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhLCBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhQXJncyB7XG4gICAgY3VlUG9pbnRUeXBlPyA6IHN0cmluZztcblx0aWQ/IDogc3RyaW5nO1xuXHRuYW1lPyA6IHN0cmluZztcblx0dGV4dD8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRzdGFydFRpbWU/IDogc3RyaW5nO1xuXHRlbmRUaW1lPyA6IHN0cmluZztcblx0c3ViVHlwZT8gOiBzdHJpbmc7XG5cdHF1ZXN0aW9uPyA6IHN0cmluZztcblx0YW5zd2Vycz8gOiBLYWx0dXJhU3RyaW5nW107XG5cdGhpbnQ/IDogc3RyaW5nO1xuXHRleHBsYW5hdGlvbj8gOiBzdHJpbmc7XG5cdGFzc2V0SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbURhdGEgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhIHtcblxuICAgIGN1ZVBvaW50VHlwZSA6IHN0cmluZztcblx0aWQgOiBzdHJpbmc7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHRleHQgOiBzdHJpbmc7XG5cdHRhZ3MgOiBLYWx0dXJhU3RyaW5nW107XG5cdHN0YXJ0VGltZSA6IHN0cmluZztcblx0ZW5kVGltZSA6IHN0cmluZztcblx0c3ViVHlwZSA6IHN0cmluZztcblx0cXVlc3Rpb24gOiBzdHJpbmc7XG5cdGFuc3dlcnMgOiBLYWx0dXJhU3RyaW5nW107XG5cdGhpbnQgOiBzdHJpbmc7XG5cdGV4cGxhbmF0aW9uIDogc3RyaW5nO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbURhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50YWdzID09PSAndW5kZWZpbmVkJykgdGhpcy50YWdzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmFuc3dlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmFuc3dlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbURhdGEnIH0sXG5cdFx0XHRcdGN1ZVBvaW50VHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRzdGFydFRpbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kVGltZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdWJUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1ZXN0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFuc3dlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0aGludCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHBsYW5hdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoQ3VlUG9pbnRJdGVtRGF0YSddID0gS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhOyJdfQ==