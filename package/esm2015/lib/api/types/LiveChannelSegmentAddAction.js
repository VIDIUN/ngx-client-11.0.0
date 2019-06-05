/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveChannelSegmentAddActionArgs() { }
/** @type {?} */
LiveChannelSegmentAddActionArgs.prototype.liveChannelSegment;
/**
 * Build request payload for service 'liveChannelSegment' action 'add'.
 *
 * Usage: Add new live channel segment
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
export class LiveChannelSegmentAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveChannelSegment', responseConstructor: KalturaLiveChannelSegment });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannelsegment' },
            action: { type: 'c', default: 'add' },
            liveChannelSegment: { type: 'o', subTypeConstructor: KalturaLiveChannelSegment, subType: 'KalturaLiveChannelSegment' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveChannelSegmentAddAction.prototype.liveChannelSegment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxTZWdtZW50QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlQ2hhbm5lbFNlZ21lbnRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RSxNQUFNLGtDQUFtQyxTQUFRLGNBQXlDOzs7O0lBSXRGLFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDJCQUEyQixFQUFFLG1CQUFtQixFQUFHLHlCQUF5QixFQUFHLENBQUMsQ0FBQztLQUN2STs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDcEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDakgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQgfSBmcm9tICcuL0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlQ2hhbm5lbFNlZ21lbnRBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbGl2ZUNoYW5uZWxTZWdtZW50IDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVDaGFubmVsU2VnbWVudCcgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IGxpdmUgY2hhbm5lbCBzZWdtZW50XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZUNoYW5uZWxTZWdtZW50QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudD4ge1xuXG4gICAgbGl2ZUNoYW5uZWxTZWdtZW50IDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlQ2hhbm5lbFNlZ21lbnRBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZWNoYW5uZWxzZWdtZW50JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRsaXZlQ2hhbm5lbFNlZ21lbnQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19