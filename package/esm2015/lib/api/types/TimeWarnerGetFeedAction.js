/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function TimeWarnerGetFeedActionArgs() { }
/** @type {?} */
TimeWarnerGetFeedActionArgs.prototype.distributionProfileId;
/** @type {?} */
TimeWarnerGetFeedActionArgs.prototype.hash;
/**
 * Build request payload for service 'timeWarner' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class TimeWarnerGetFeedAction extends KalturaFileRequest {
    /**
     * @param {?} data
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
            service: { type: 'c', default: 'timewarnerdistribution_timewarner' },
            action: { type: 'c', default: 'getFeed' },
            distributionProfileId: { type: 'n' },
            hash: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    TimeWarnerGetFeedAction.prototype.distributionProfileId;
    /** @type {?} */
    TimeWarnerGetFeedAction.prototype.hash;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVdhcm5lckdldEZlZWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RpbWVXYXJuZXJHZXRGZWVkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXJGLE1BQU0sOEJBQStCLFNBQVEsa0JBQWtCOzs7O0lBSzNELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ25GLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUM1QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVXYXJuZXJHZXRGZWVkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBkaXN0cmlidXRpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGhhc2ggOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0aW1lV2FybmVyJyBhY3Rpb24gJ2dldEZlZWQnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHsgdXJsOiBzdHJpbmcgfVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVGltZVdhcm5lckdldEZlZWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRoYXNoIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFRpbWVXYXJuZXJHZXRGZWVkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3RpbWV3YXJuZXJkaXN0cmlidXRpb25fdGltZXdhcm5lcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEZlZWQnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGlvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoYXNoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==