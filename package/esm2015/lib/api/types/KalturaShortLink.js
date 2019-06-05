/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaShortLinkStatus } from './KalturaShortLinkStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaShortLinkArgs() { }
/** @type {?|undefined} */
KalturaShortLinkArgs.prototype.expiresAt;
/** @type {?|undefined} */
KalturaShortLinkArgs.prototype.userId;
/** @type {?|undefined} */
KalturaShortLinkArgs.prototype.name;
/** @type {?|undefined} */
KalturaShortLinkArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaShortLinkArgs.prototype.fullUrl;
/** @type {?|undefined} */
KalturaShortLinkArgs.prototype.status;
export class KalturaShortLink extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaShortLink' },
            id: { type: 's', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            expiresAt: { type: 'n' },
            partnerId: { type: 'n', readOnly: true },
            userId: { type: 's' },
            name: { type: 's' },
            systemName: { type: 's' },
            fullUrl: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaShortLinkStatus, subType: 'KalturaShortLinkStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaShortLink.prototype.id;
    /** @type {?} */
    KalturaShortLink.prototype.createdAt;
    /** @type {?} */
    KalturaShortLink.prototype.updatedAt;
    /** @type {?} */
    KalturaShortLink.prototype.expiresAt;
    /** @type {?} */
    KalturaShortLink.prototype.partnerId;
    /** @type {?} */
    KalturaShortLink.prototype.userId;
    /** @type {?} */
    KalturaShortLink.prototype.name;
    /** @type {?} */
    KalturaShortLink.prototype.systemName;
    /** @type {?} */
    KalturaShortLink.prototype.fullUrl;
    /** @type {?} */
    KalturaShortLink.prototype.status;
}
typesMappingStorage['KalturaShortLink'] = KalturaShortLink;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNob3J0TGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNob3J0TGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsTUFBTSx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7SUFhbkQsWUFBWSxJQUE0QjtRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNoRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2hvcnRMaW5rU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU2hvcnRMaW5rU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2hvcnRMaW5rQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGV4cGlyZXNBdD8gOiBudW1iZXI7XG5cdHVzZXJJZD8gOiBzdHJpbmc7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZnVsbFVybD8gOiBzdHJpbmc7XG5cdHN0YXR1cz8gOiBLYWx0dXJhU2hvcnRMaW5rU3RhdHVzO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2hvcnRMaW5rIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdGV4cGlyZXNBdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGZ1bGxVcmwgOiBzdHJpbmc7XG5cdHN0YXR1cyA6IEthbHR1cmFTaG9ydExpbmtTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTaG9ydExpbmtBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNob3J0TGluaycgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRleHBpcmVzQXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdWxsVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTaG9ydExpbmtTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNob3J0TGlua1N0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNob3J0TGluayddID0gS2FsdHVyYVNob3J0TGluazsiXX0=