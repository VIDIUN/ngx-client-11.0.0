/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAppToken extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwcFRva2VuLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBwVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsTUFBTSxzQkFBdUIsU0FBUSxpQkFBaUI7Ozs7SUFnQmxELFlBQVksSUFBMkI7UUFFbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN4SCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3RHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDN0csV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFwcFRva2VuU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQXBwVG9rZW5TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNlc3Npb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2Vzc2lvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUFwcFRva2VuSGFzaFR5cGUgfSBmcm9tICcuL0thbHR1cmFBcHBUb2tlbkhhc2hUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXBwVG9rZW5BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZXhwaXJ5PyA6IG51bWJlcjtcblx0c2Vzc2lvblR5cGU/IDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRzZXNzaW9uVXNlcklkPyA6IHN0cmluZztcblx0c2Vzc2lvbkR1cmF0aW9uPyA6IG51bWJlcjtcblx0c2Vzc2lvblByaXZpbGVnZXM/IDogc3RyaW5nO1xuXHRoYXNoVHlwZT8gOiBLYWx0dXJhQXBwVG9rZW5IYXNoVHlwZTtcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXBwVG9rZW4gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IHN0cmluZztcblx0cmVhZG9ubHkgdG9rZW4gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUFwcFRva2VuU3RhdHVzO1xuXHRleHBpcnkgOiBudW1iZXI7XG5cdHNlc3Npb25UeXBlIDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRzZXNzaW9uVXNlcklkIDogc3RyaW5nO1xuXHRzZXNzaW9uRHVyYXRpb24gOiBudW1iZXI7XG5cdHNlc3Npb25Qcml2aWxlZ2VzIDogc3RyaW5nO1xuXHRoYXNoVHlwZSA6IEthbHR1cmFBcHBUb2tlbkhhc2hUeXBlO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFwcFRva2VuQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBcHBUb2tlbicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0b2tlbiA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFwcFRva2VuU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFBcHBUb2tlblN0YXR1cycgfSxcblx0XHRcdFx0ZXhwaXJ5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlc3Npb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlc3Npb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZXNzaW9uVHlwZScgfSxcblx0XHRcdFx0c2Vzc2lvblVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXNzaW9uRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2Vzc2lvblByaXZpbGVnZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aGFzaFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXBwVG9rZW5IYXNoVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXBwVG9rZW5IYXNoVHlwZScgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFwcFRva2VuJ10gPSBLYWx0dXJhQXBwVG9rZW47Il19