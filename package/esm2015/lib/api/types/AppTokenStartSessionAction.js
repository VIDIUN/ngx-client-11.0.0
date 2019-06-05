/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSessionInfo } from './KalturaSessionInfo';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AppTokenStartSessionActionArgs() { }
/** @type {?} */
AppTokenStartSessionActionArgs.prototype.id;
/** @type {?} */
AppTokenStartSessionActionArgs.prototype.tokenHash;
/** @type {?|undefined} */
AppTokenStartSessionActionArgs.prototype.userId;
/** @type {?|undefined} */
AppTokenStartSessionActionArgs.prototype.type;
/** @type {?|undefined} */
AppTokenStartSessionActionArgs.prototype.expiry;
/**
 * Build request payload for service 'appToken' action 'startSession'.
 *
 * Usage: Starts a new KS (kaltura Session) based on application authentication token id
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export class AppTokenStartSessionAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaSessionInfo', responseConstructor: KalturaSessionInfo });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'apptoken' },
            action: { type: 'c', default: 'startSession' },
            id: { type: 's' },
            tokenHash: { type: 's' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            expiry: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    AppTokenStartSessionAction.prototype.id;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.tokenHash;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.userId;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.type;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.expiry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVG9rZW5TdGFydFNlc3Npb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FwcFRva2VuU3RhcnRTZXNzaW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEUsTUFBTSxpQ0FBa0MsU0FBUSxjQUFrQzs7OztJQVE5RSxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDLENBQUM7S0FDekg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDL0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvbkluZm8gfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uSW5mbyc7XG5cbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRva2VuU3RhcnRTZXNzaW9uQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHR0b2tlbkhhc2ggOiBzdHJpbmc7XG5cdHVzZXJJZD8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRleHBpcnk/IDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYXBwVG9rZW4nIGFjdGlvbiAnc3RhcnRTZXNzaW9uJy5cbiAqXG4gKiBVc2FnZTogU3RhcnRzIGEgbmV3IEtTIChrYWx0dXJhIFNlc3Npb24pIGJhc2VkIG9uIGFwcGxpY2F0aW9uIGF1dGhlbnRpY2F0aW9uIHRva2VuIGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNlc3Npb25JbmZvXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBUb2tlblN0YXJ0U2Vzc2lvbkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZXNzaW9uSW5mbz4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHRva2VuSGFzaCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRleHBpcnkgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQXBwVG9rZW5TdGFydFNlc3Npb25BY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTZXNzaW9uSW5mbycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvbkluZm8gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FwcHRva2VuJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RhcnRTZXNzaW9uJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0b2tlbkhhc2ggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlc3Npb25UeXBlJyB9LFxuXHRcdFx0XHRleHBpcnkgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19