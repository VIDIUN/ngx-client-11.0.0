/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryServerNodeUpdateActionArgs() { }
/** @type {?} */
EntryServerNodeUpdateActionArgs.prototype.id;
/** @type {?} */
EntryServerNodeUpdateActionArgs.prototype.entryServerNode;
/**
 * Build request payload for service 'entryServerNode' action 'update'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryServerNode' action 'update'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 */
EntryServerNodeUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryServerNodeUpdateAction, _super);
    function EntryServerNodeUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEntryServerNode', responseConstructor: KalturaEntryServerNode }) || this;
    }
    /**
     * @return {?}
     */
    EntryServerNodeUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'entryservernode' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            entryServerNode: { type: 'o', subTypeConstructor: KalturaEntryServerNode, subType: 'KalturaEntryServerNode' }
        });
        return result;
    };
    return EntryServerNodeUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'entryServerNode' action 'update'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 */
export { EntryServerNodeUpdateAction };
if (false) {
    /** @type {?} */
    EntryServerNodeUpdateAction.prototype.id;
    /** @type {?} */
    EntryServerNodeUpdateAction.prototype.entryServerNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlTZXJ2ZXJOb2RlVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbnRyeVNlcnZlck5vZGVVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBc0M7SUFLbkYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ3hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBMUNMO0VBbUJpRCxjQUFjLEVBd0I5RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsdUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeVNlcnZlck5vZGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGVudHJ5U2VydmVyTm9kZSA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdlbnRyeVNlcnZlck5vZGUnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRyeVNlcnZlck5vZGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0ZW50cnlTZXJ2ZXJOb2RlIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFbnRyeVNlcnZlck5vZGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZW50cnlzZXJ2ZXJub2RlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeVNlcnZlck5vZGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19