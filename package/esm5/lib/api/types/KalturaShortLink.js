/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaShortLink = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaShortLink, _super);
    function KalturaShortLink(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaShortLink.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaShortLink;
}(KalturaObjectBase));
export { KalturaShortLink };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNob3J0TGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNob3J0TGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxGLElBQUE7SUFBc0MsNENBQWlCO0lBYW5ELDBCQUFZLElBQTRCO2VBRXBDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsdUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNoRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQXJETDtFQWVzQyxpQkFBaUIsRUF1Q3RELENBQUE7QUF2Q0QsNEJBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNob3J0TGlua1N0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVNob3J0TGlua1N0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNob3J0TGlua0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBleHBpcmVzQXQ/IDogbnVtYmVyO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHRuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGZ1bGxVcmw/IDogc3RyaW5nO1xuXHRzdGF0dXM/IDogS2FsdHVyYVNob3J0TGlua1N0YXR1cztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNob3J0TGluayBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRleHBpcmVzQXQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRmdWxsVXJsIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhU2hvcnRMaW5rU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2hvcnRMaW5rQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTaG9ydExpbmsnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZXhwaXJlc0F0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnVsbFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2hvcnRMaW5rU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTaG9ydExpbmtTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTaG9ydExpbmsnXSA9IEthbHR1cmFTaG9ydExpbms7Il19