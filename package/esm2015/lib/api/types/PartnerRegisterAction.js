/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerRegisterActionArgs() { }
/** @type {?} */
PartnerRegisterActionArgs.prototype.partner;
/** @type {?|undefined} */
PartnerRegisterActionArgs.prototype.cmsPassword;
/** @type {?|undefined} */
PartnerRegisterActionArgs.prototype.templatePartnerId;
/** @type {?|undefined} */
PartnerRegisterActionArgs.prototype.silent;
/**
 * Build request payload for service 'partner' action 'register'.
 *
 * Usage: Create a new Partner object
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export class PartnerRegisterAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPartner', responseConstructor: KalturaPartner });
        if (typeof this.silent === 'undefined')
            this.silent = false;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'register' },
            partner: { type: 'o', subTypeConstructor: KalturaPartner, subType: 'KalturaPartner' },
            cmsPassword: { type: 's' },
            templatePartnerId: { type: 'n' },
            silent: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    PartnerRegisterAction.prototype.partner;
    /** @type {?} */
    PartnerRegisterAction.prototype.cmsPassword;
    /** @type {?} */
    PartnerRegisterAction.prototype.templatePartnerId;
    /** @type {?} */
    PartnerRegisterAction.prototype.silent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lclJlZ2lzdGVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QYXJ0bmVyUmVnaXN0ZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFLE1BQU0sNEJBQTZCLFNBQVEsY0FBOEI7Ozs7SUFPckUsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUcsY0FBYyxFQUFHLENBQUMsQ0FBQztRQUM5RyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDL0Q7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDN0MsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxjQUFjLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ3pGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXIgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydG5lclJlZ2lzdGVyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBhcnRuZXIgOiBLYWx0dXJhUGFydG5lcjtcblx0Y21zUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHR0ZW1wbGF0ZVBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdHNpbGVudD8gOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncGFydG5lcicgYWN0aW9uICdyZWdpc3RlcicuXG4gKlxuICogVXNhZ2U6IENyZWF0ZSBhIG5ldyBQYXJ0bmVyIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQYXJ0bmVyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0bmVyUmVnaXN0ZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGFydG5lcj4ge1xuXG4gICAgcGFydG5lciA6IEthbHR1cmFQYXJ0bmVyO1xuXHRjbXNQYXNzd29yZCA6IHN0cmluZztcblx0dGVtcGxhdGVQYXJ0bmVySWQgOiBudW1iZXI7XG5cdHNpbGVudCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGFydG5lclJlZ2lzdGVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lciAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zaWxlbnQgPT09ICd1bmRlZmluZWQnKSB0aGlzLnNpbGVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BhcnRuZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZWdpc3RlcicgfSxcblx0XHRcdFx0cGFydG5lciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXInIH0sXG5cdFx0XHRcdGNtc1Bhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlUGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNpbGVudCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=