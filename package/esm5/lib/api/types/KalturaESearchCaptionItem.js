/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCaptionFieldName } from './KalturaESearchCaptionFieldName';
import { KalturaESearchEntryAbstractNestedItem } from './KalturaESearchEntryAbstractNestedItem';
/**
 * @record
 */
export function KalturaESearchCaptionItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCaptionItemArgs.prototype.fieldName;
var KalturaESearchCaptionItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCaptionItem, _super);
    function KalturaESearchCaptionItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCaptionItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCaptionItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCaptionFieldName, subType: 'KalturaESearchCaptionFieldName' }
        });
        return result;
    };
    return KalturaESearchCaptionItem;
}(KalturaESearchEntryAbstractNestedItem));
export { KalturaESearchCaptionItem };
if (false) {
    /** @type {?} */
    KalturaESearchCaptionItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchCaptionItem'] = KalturaESearchCaptionItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUscUNBQXFDLEVBQTZDLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7QUFPM0ksSUFBQTtJQUErQyxxREFBcUM7SUFJaEYsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNuSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQTlCTDtFQVUrQyxxQ0FBcUMsRUFxQm5GLENBQUE7QUFyQkQscUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hDYXB0aW9uRmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhcHRpb25GaWVsZE5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbSwgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW1BcmdzIHtcbiAgICBmaWVsZE5hbWU/IDogS2FsdHVyYUVTZWFyY2hDYXB0aW9uRmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbSB7XG5cbiAgICBmaWVsZE5hbWUgOiBLYWx0dXJhRVNlYXJjaENhcHRpb25GaWVsZE5hbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbScgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXB0aW9uRmllbGROYW1lLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoQ2FwdGlvbkZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbSddID0gS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbTsiXX0=