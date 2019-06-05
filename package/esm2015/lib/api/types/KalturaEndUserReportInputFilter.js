/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
/**
 * @record
 */
export function KalturaEndUserReportInputFilterArgs() { }
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.application;
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.userIds;
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.playbackContext;
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.ancestorPlaybackContext;
export class KalturaEndUserReportInputFilter extends KalturaReportInputFilter {
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
            objectType: { type: 'c', default: 'KalturaEndUserReportInputFilter' },
            application: { type: 's' },
            userIds: { type: 's' },
            playbackContext: { type: 's' },
            ancestorPlaybackContext: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.application;
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.userIds;
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.playbackContext;
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.ancestorPlaybackContext;
}
typesMappingStorage['KalturaEndUserReportInputFilter'] = KalturaEndUserReportInputFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVwRyxNQUFNLHNDQUF1QyxTQUFRLHdCQUF3Qjs7OztJQU96RSxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyLCBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbmRVc2VyUmVwb3J0SW5wdXRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlckFyZ3Mge1xuICAgIGFwcGxpY2F0aW9uPyA6IHN0cmluZztcblx0dXNlcklkcz8gOiBzdHJpbmc7XG5cdHBsYXliYWNrQ29udGV4dD8gOiBzdHJpbmc7XG5cdGFuY2VzdG9yUGxheWJhY2tDb250ZXh0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlciBleHRlbmRzIEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciB7XG5cbiAgICBhcHBsaWNhdGlvbiA6IHN0cmluZztcblx0dXNlcklkcyA6IHN0cmluZztcblx0cGxheWJhY2tDb250ZXh0IDogc3RyaW5nO1xuXHRhbmNlc3RvclBsYXliYWNrQ29udGV4dCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW5kVXNlclJlcG9ydElucHV0RmlsdGVyJyB9LFxuXHRcdFx0XHRhcHBsaWNhdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBsYXliYWNrQ29udGV4dCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbmNlc3RvclBsYXliYWNrQ29udGV4dCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW5kVXNlclJlcG9ydElucHV0RmlsdGVyJ10gPSBLYWx0dXJhRW5kVXNlclJlcG9ydElucHV0RmlsdGVyOyJdfQ==