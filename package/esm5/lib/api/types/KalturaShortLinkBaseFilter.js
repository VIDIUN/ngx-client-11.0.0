/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaShortLinkStatus } from './KalturaShortLinkStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaShortLinkBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.expiresAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.expiresAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaShortLinkBaseFilterArgs.prototype.statusIn;
var KalturaShortLinkBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaShortLinkBaseFilter, _super);
    function KalturaShortLinkBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaShortLinkBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaShortLinkBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            expiresAtGreaterThanOrEqual: { type: 'n' },
            expiresAtLessThanOrEqual: { type: 'n' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaShortLinkStatus, subType: 'KalturaShortLinkStatus' },
            statusIn: { type: 's' }
        });
        return result;
    };
    return KalturaShortLinkBaseFilter;
}(KalturaFilter));
export { KalturaShortLinkBaseFilter };
if (false) {
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.expiresAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.expiresAtLessThanOrEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaShortLinkBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaShortLinkBaseFilter'] = KalturaShortLinkBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNob3J0TGlua0Jhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTaG9ydExpbmtCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQm5FLElBQUE7SUFBZ0Qsc0RBQWE7SUFtQnpELG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0EzRUw7RUF5QmdELGFBQWEsRUFtRDVELENBQUE7QUFuREQsc0NBbURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNob3J0TGlua1N0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVNob3J0TGlua1N0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNob3J0TGlua0Jhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IHN0cmluZztcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRleHBpcmVzQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRleHBpcmVzQXRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0dXNlcklkRXF1YWw/IDogc3RyaW5nO1xuXHR1c2VySWRJbj8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFTaG9ydExpbmtTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNob3J0TGlua0Jhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBzdHJpbmc7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGV4cGlyZXNBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZXhwaXJlc0F0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHR1c2VySWRJbiA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVNob3J0TGlua1N0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTaG9ydExpbmtCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTaG9ydExpbmtCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGV4cGlyZXNBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleHBpcmVzQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTaG9ydExpbmtTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNob3J0TGlua1N0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNob3J0TGlua0Jhc2VGaWx0ZXInXSA9IEthbHR1cmFTaG9ydExpbmtCYXNlRmlsdGVyOyJdfQ==