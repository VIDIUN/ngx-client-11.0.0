/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaReportInputBaseFilter } from './KalturaReportInputBaseFilter';
/**
 * @record
 */
export function KalturaReportInputFilterArgs() { }
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.keywords;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.searchInTags;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.searchInAdminTags;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.categories;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.timeZoneOffset;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.interval;
var KalturaReportInputFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaReportInputFilter, _super);
    function KalturaReportInputFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaReportInputFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaReportInputFilter' },
            keywords: { type: 's' },
            searchInTags: { type: 'b' },
            searchInAdminTags: { type: 'b' },
            categories: { type: 's' },
            timeZoneOffset: { type: 'n' },
            interval: { type: 'es', subTypeConstructor: KalturaReportInterval, subType: 'KalturaReportInterval' }
        });
        return result;
    };
    return KalturaReportInputFilter;
}(KalturaReportInputBaseFilter));
export { KalturaReportInputFilter };
if (false) {
    /** @type {?} */
    KalturaReportInputFilter.prototype.keywords;
    /** @type {?} */
    KalturaReportInputFilter.prototype.searchInTags;
    /** @type {?} */
    KalturaReportInputFilter.prototype.searchInAdminTags;
    /** @type {?} */
    KalturaReportInputFilter.prototype.categories;
    /** @type {?} */
    KalturaReportInputFilter.prototype.timeZoneOffset;
    /** @type {?} */
    KalturaReportInputFilter.prototype.interval;
}
typesMappingStorage['KalturaReportInputFilter'] = KalturaReportInputFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFvQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVloSCxJQUFBO0lBQThDLG9EQUE0QjtJQVN0RSxrQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBN0NMO0VBZThDLDRCQUE0QixFQStCekUsQ0FBQTtBQS9CRCxvQ0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydEludGVydmFsIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0SW50ZXJ2YWwnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlciwgS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlckFyZ3Mge1xuICAgIGtleXdvcmRzPyA6IHN0cmluZztcblx0c2VhcmNoSW5UYWdzPyA6IGJvb2xlYW47XG5cdHNlYXJjaEluQWRtaW5UYWdzPyA6IGJvb2xlYW47XG5cdGNhdGVnb3JpZXM/IDogc3RyaW5nO1xuXHR0aW1lWm9uZU9mZnNldD8gOiBudW1iZXI7XG5cdGludGVydmFsPyA6IEthbHR1cmFSZXBvcnRJbnRlcnZhbDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlciB7XG5cbiAgICBrZXl3b3JkcyA6IHN0cmluZztcblx0c2VhcmNoSW5UYWdzIDogYm9vbGVhbjtcblx0c2VhcmNoSW5BZG1pblRhZ3MgOiBib29sZWFuO1xuXHRjYXRlZ29yaWVzIDogc3RyaW5nO1xuXHR0aW1lWm9uZU9mZnNldCA6IG51bWJlcjtcblx0aW50ZXJ2YWwgOiBLYWx0dXJhUmVwb3J0SW50ZXJ2YWw7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdGtleXdvcmRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlYXJjaEluVGFncyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzZWFyY2hJbkFkbWluVGFncyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRjYXRlZ29yaWVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpbWVab25lT2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGludGVydmFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydEludGVydmFsLCBzdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRJbnRlcnZhbCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJ10gPSBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7Il19