/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractEntryItem } from './KalturaESearchAbstractEntryItem';
/**
 * @record
 */
export function KalturaESearchUnifiedItemArgs() { }
var KalturaESearchUnifiedItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchUnifiedItem, _super);
    function KalturaESearchUnifiedItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchUnifiedItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUnifiedItem' }
        });
        return result;
    };
    return KalturaESearchUnifiedItem;
}(KalturaESearchAbstractEntryItem));
export { KalturaESearchUnifiedItem };
typesMappingStorage['KalturaESearchUnifiedItem'] = KalturaESearchUnifiedItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVbmlmaWVkSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hVbmlmaWVkSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQXVDLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBT3pILElBQUE7SUFBK0MscURBQStCO0lBSTFFLG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDckUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0E1Qkw7RUFTK0MsK0JBQStCLEVBb0I3RSxDQUFBO0FBcEJELHFDQW9CQztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbSwgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoVW5pZmllZEl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW1BcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hVbmlmaWVkSXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0ge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoVW5pZmllZEl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVbmlmaWVkSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hVbmlmaWVkSXRlbSddID0gS2FsdHVyYUVTZWFyY2hVbmlmaWVkSXRlbTsiXX0=