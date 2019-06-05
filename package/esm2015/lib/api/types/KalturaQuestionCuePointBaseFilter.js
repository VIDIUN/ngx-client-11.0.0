/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaQuestionCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaQuestionCuePointBaseFilterArgs.prototype.questionLike;
/** @type {?|undefined} */
KalturaQuestionCuePointBaseFilterArgs.prototype.questionMultiLikeOr;
/** @type {?|undefined} */
KalturaQuestionCuePointBaseFilterArgs.prototype.questionMultiLikeAnd;
export class KalturaQuestionCuePointBaseFilter extends KalturaCuePointFilter {
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
            objectType: { type: 'c', default: 'KalturaQuestionCuePointBaseFilter' },
            questionLike: { type: 's' },
            questionMultiLikeOr: { type: 's' },
            questionMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaQuestionCuePointBaseFilter.prototype.questionLike;
    /** @type {?} */
    KalturaQuestionCuePointBaseFilter.prototype.questionMultiLikeOr;
    /** @type {?} */
    KalturaQuestionCuePointBaseFilter.prototype.questionMultiLikeAnd;
}
typesMappingStorage['KalturaQuestionCuePointBaseFilter'] = KalturaQuestionCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUXVlc3Rpb25DdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7O0FBUzNGLE1BQU0sd0NBQXlDLFNBQVEscUJBQXFCOzs7O0lBTXhFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50RmlsdGVyLCBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFRdWVzdGlvbkN1ZVBvaW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB7XG4gICAgcXVlc3Rpb25MaWtlPyA6IHN0cmluZztcblx0cXVlc3Rpb25NdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHF1ZXN0aW9uTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyIHtcblxuICAgIHF1ZXN0aW9uTGlrZSA6IHN0cmluZztcblx0cXVlc3Rpb25NdWx0aUxpa2VPciA6IHN0cmluZztcblx0cXVlc3Rpb25NdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFRdWVzdGlvbkN1ZVBvaW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUXVlc3Rpb25DdWVQb2ludEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHF1ZXN0aW9uTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWVzdGlvbk11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1ZXN0aW9uTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFRdWVzdGlvbkN1ZVBvaW50QmFzZUZpbHRlciddID0gS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRCYXNlRmlsdGVyOyJdfQ==