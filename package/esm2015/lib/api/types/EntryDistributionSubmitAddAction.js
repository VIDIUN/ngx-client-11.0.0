/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryDistributionSubmitAddActionArgs() { }
/** @type {?} */
EntryDistributionSubmitAddActionArgs.prototype.id;
/** @type {?|undefined} */
EntryDistributionSubmitAddActionArgs.prototype.submitWhenReady;
/**
 * Build request payload for service 'entryDistribution' action 'submitAdd'.
 *
 * Usage: Submits Entry Distribution to the remote destination
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export class EntryDistributionSubmitAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaEntryDistribution', responseConstructor: KalturaEntryDistribution });
        if (typeof this.submitWhenReady === 'undefined')
            this.submitWhenReady = false;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'submitAdd' },
            id: { type: 'n' },
            submitWhenReady: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EntryDistributionSubmitAddAction.prototype.id;
    /** @type {?} */
    EntryDistributionSubmitAddAction.prototype.submitWhenReady;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25TdWJtaXRBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VudHJ5RGlzdHJpYnV0aW9uU3VibWl0QWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLHVDQUF3QyxTQUFRLGNBQXdDOzs7O0lBSzFGLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDBCQUEwQixFQUFFLG1CQUFtQixFQUFHLHdCQUF3QixFQUFHLENBQUMsQ0FBQztRQUNsSSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7S0FDakY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQ3ZGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUM5QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbiB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlEaXN0cmlidXRpb25TdWJtaXRBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHN1Ym1pdFdoZW5SZWFkeT8gOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlEaXN0cmlidXRpb24nIGFjdGlvbiAnc3VibWl0QWRkJy5cbiAqXG4gKiBVc2FnZTogU3VibWl0cyBFbnRyeSBEaXN0cmlidXRpb24gdG8gdGhlIHJlbW90ZSBkZXN0aW5hdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW50cnlEaXN0cmlidXRpb25TdWJtaXRBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW50cnlEaXN0cmlidXRpb24+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRzdWJtaXRXaGVuUmVhZHkgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEVudHJ5RGlzdHJpYnV0aW9uU3VibWl0QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnN1Ym1pdFdoZW5SZWFkeSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3VibWl0V2hlblJlYWR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9lbnRyeWRpc3RyaWJ1dGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N1Ym1pdEFkZCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3VibWl0V2hlblJlYWR5IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==