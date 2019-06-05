/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAuditTrail } from './KalturaAuditTrail';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AuditTrailAddActionArgs() { }
/** @type {?} */
AuditTrailAddActionArgs.prototype.auditTrail;
/**
 * Build request payload for service 'auditTrail' action 'add'.
 *
 * Usage: Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'auditTrail' action 'add'.
 *
 * Usage: Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 */
AuditTrailAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(AuditTrailAddAction, _super);
    function AuditTrailAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAuditTrail', responseConstructor: KalturaAuditTrail }) || this;
    }
    /**
     * @return {?}
     */
    AuditTrailAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'audit_audittrail' },
            action: { type: 'c', default: 'add' },
            auditTrail: { type: 'o', subTypeConstructor: KalturaAuditTrail, subType: 'KalturaAuditTrail' }
        });
        return result;
    };
    return AuditTrailAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'auditTrail' action 'add'.
 *
 * Usage: Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 */
export { AuditTrailAddAction };
if (false) {
    /** @type {?} */
    AuditTrailAddAction.prototype.auditTrail;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRUcmFpbEFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQXVkaXRUcmFpbEFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBaUM7SUFJdEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2xFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUN6RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhCQXZDTDtFQWtCeUMsY0FBYyxFQXNCdEQsQ0FBQTs7Ozs7Ozs7O0FBdEJELCtCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbCB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWwnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBdWRpdFRyYWlsQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGF1ZGl0VHJhaWwgOiBLYWx0dXJhQXVkaXRUcmFpbDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2F1ZGl0VHJhaWwnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgYW4gYXVkaXQgdHJhaWwgb2JqZWN0IGFuZCBhdWRpdCB0cmFpbCBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCBLYWx0dXJhIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFBdWRpdFRyYWlsXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpdFRyYWlsQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUF1ZGl0VHJhaWw+IHtcblxuICAgIGF1ZGl0VHJhaWwgOiBLYWx0dXJhQXVkaXRUcmFpbDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBdWRpdFRyYWlsQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYXVkaXRfYXVkaXR0cmFpbCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0YXVkaXRUcmFpbCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWwsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWwnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==