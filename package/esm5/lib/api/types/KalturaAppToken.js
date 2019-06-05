/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaAppTokenHashType } from './KalturaAppTokenHashType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAppTokenArgs() { }
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.expiry;
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.sessionType;
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.sessionUserId;
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.sessionDuration;
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.sessionPrivileges;
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.hashType;
/** @type {?|undefined} */
KalturaAppTokenArgs.prototype.description;
var KalturaAppToken = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAppToken, _super);
    function KalturaAppToken(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAppToken.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAppToken' },
            id: { type: 's', readOnly: true },
            token: { type: 's', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaAppTokenStatus, subType: 'KalturaAppTokenStatus' },
            expiry: { type: 'n' },
            sessionType: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            sessionUserId: { type: 's' },
            sessionDuration: { type: 'n' },
            sessionPrivileges: { type: 's' },
            hashType: { type: 'es', subTypeConstructor: KalturaAppTokenHashType, subType: 'KalturaAppTokenHashType' },
            description: { type: 's' }
        });
        return result;
    };
    return KalturaAppToken;
}(KalturaObjectBase));
export { KalturaAppToken };
if (false) {
    /** @type {?} */
    KalturaAppToken.prototype.id;
    /** @type {?} */
    KalturaAppToken.prototype.token;
    /** @type {?} */
    KalturaAppToken.prototype.partnerId;
    /** @type {?} */
    KalturaAppToken.prototype.createdAt;
    /** @type {?} */
    KalturaAppToken.prototype.updatedAt;
    /** @type {?} */
    KalturaAppToken.prototype.status;
    /** @type {?} */
    KalturaAppToken.prototype.expiry;
    /** @type {?} */
    KalturaAppToken.prototype.sessionType;
    /** @type {?} */
    KalturaAppToken.prototype.sessionUserId;
    /** @type {?} */
    KalturaAppToken.prototype.sessionDuration;
    /** @type {?} */
    KalturaAppToken.prototype.sessionPrivileges;
    /** @type {?} */
    KalturaAppToken.prototype.hashType;
    /** @type {?} */
    KalturaAppToken.prototype.description;
}
typesMappingStorage['KalturaAppToken'] = KalturaAppToken;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwcFRva2VuLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBwVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxGLElBQUE7SUFBcUMsMkNBQWlCO0lBZ0JsRCx5QkFBWSxJQUEyQjtlQUVuQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN4SCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3RHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDN0csV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQTlETDtFQWtCcUMsaUJBQWlCLEVBNkNyRCxDQUFBO0FBN0NELDJCQTZDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXBwVG9rZW5TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFBcHBUb2tlblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXBwVG9rZW5IYXNoVHlwZSB9IGZyb20gJy4vS2FsdHVyYUFwcFRva2VuSGFzaFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBcHBUb2tlbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBleHBpcnk/IDogbnVtYmVyO1xuXHRzZXNzaW9uVHlwZT8gOiBLYWx0dXJhU2Vzc2lvblR5cGU7XG5cdHNlc3Npb25Vc2VySWQ/IDogc3RyaW5nO1xuXHRzZXNzaW9uRHVyYXRpb24/IDogbnVtYmVyO1xuXHRzZXNzaW9uUHJpdmlsZWdlcz8gOiBzdHJpbmc7XG5cdGhhc2hUeXBlPyA6IEthbHR1cmFBcHBUb2tlbkhhc2hUeXBlO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBcHBUb2tlbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRyZWFkb25seSB0b2tlbiA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhQXBwVG9rZW5TdGF0dXM7XG5cdGV4cGlyeSA6IG51bWJlcjtcblx0c2Vzc2lvblR5cGUgOiBLYWx0dXJhU2Vzc2lvblR5cGU7XG5cdHNlc3Npb25Vc2VySWQgOiBzdHJpbmc7XG5cdHNlc3Npb25EdXJhdGlvbiA6IG51bWJlcjtcblx0c2Vzc2lvblByaXZpbGVnZXMgOiBzdHJpbmc7XG5cdGhhc2hUeXBlIDogS2FsdHVyYUFwcFRva2VuSGFzaFR5cGU7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXBwVG9rZW5BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFwcFRva2VuJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHRva2VuIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXBwVG9rZW5TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUFwcFRva2VuU3RhdHVzJyB9LFxuXHRcdFx0XHRleHBpcnkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2Vzc2lvblR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlc3Npb25UeXBlJyB9LFxuXHRcdFx0XHRzZXNzaW9uVXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlc3Npb25EdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZXNzaW9uUHJpdmlsZWdlcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRoYXNoVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBcHBUb2tlbkhhc2hUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBcHBUb2tlbkhhc2hUeXBlJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXBwVG9rZW4nXSA9IEthbHR1cmFBcHBUb2tlbjsiXX0=