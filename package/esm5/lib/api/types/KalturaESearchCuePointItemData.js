/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaESearchCuePointItemData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCuePointItemData, _super);
    function KalturaESearchCuePointItemData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.tags === 'undefined')
            _this.tags = [];
        if (typeof _this.answers === 'undefined')
            _this.answers = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCuePointItemData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaESearchCuePointItemData;
}(KalturaESearchItemData));
export { KalturaESearchCuePointItemData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1COUYsSUFBQTtJQUFvRCwwREFBc0I7SUFnQnRFLHdDQUFZLElBQTBDO1FBQXRELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUN4RDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNwRixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDdkYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQXBFTDtFQXNCb0Qsc0JBQXNCLEVBK0N6RSxDQUFBO0FBL0NELDBDQStDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSwgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoSXRlbURhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ3VlUG9pbnRJdGVtRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YUFyZ3Mge1xuICAgIGN1ZVBvaW50VHlwZT8gOiBzdHJpbmc7XG5cdGlkPyA6IHN0cmluZztcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHRleHQ/IDogc3RyaW5nO1xuXHR0YWdzPyA6IEthbHR1cmFTdHJpbmdbXTtcblx0c3RhcnRUaW1lPyA6IHN0cmluZztcblx0ZW5kVGltZT8gOiBzdHJpbmc7XG5cdHN1YlR5cGU/IDogc3RyaW5nO1xuXHRxdWVzdGlvbj8gOiBzdHJpbmc7XG5cdGFuc3dlcnM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRoaW50PyA6IHN0cmluZztcblx0ZXhwbGFuYXRpb24/IDogc3RyaW5nO1xuXHRhc3NldElkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSB7XG5cbiAgICBjdWVQb2ludFR5cGUgOiBzdHJpbmc7XG5cdGlkIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHR0ZXh0IDogc3RyaW5nO1xuXHR0YWdzIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRzdGFydFRpbWUgOiBzdHJpbmc7XG5cdGVuZFRpbWUgOiBzdHJpbmc7XG5cdHN1YlR5cGUgOiBzdHJpbmc7XG5cdHF1ZXN0aW9uIDogc3RyaW5nO1xuXHRhbnN3ZXJzIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRoaW50IDogc3RyaW5nO1xuXHRleHBsYW5hdGlvbiA6IHN0cmluZztcblx0YXNzZXRJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGFncyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudGFncyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hbnN3ZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5hbnN3ZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1EYXRhJyB9LFxuXHRcdFx0XHRjdWVQb2ludFR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0ZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0c3RhcnRUaW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3ViVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWVzdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbnN3ZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmcnIH0sXG5cdFx0XHRcdGhpbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXhwbGFuYXRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbURhdGEnXSA9IEthbHR1cmFFU2VhcmNoQ3VlUG9pbnRJdGVtRGF0YTsiXX0=