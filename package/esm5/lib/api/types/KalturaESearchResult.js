/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchHighlight } from './KalturaESearchHighlight';
import { KalturaESearchItemDataResult } from './KalturaESearchItemDataResult';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaESearchResultArgs() { }
/** @type {?|undefined} */
KalturaESearchResultArgs.prototype.highlight;
/** @type {?|undefined} */
KalturaESearchResultArgs.prototype.itemsData;
var KalturaESearchResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchResult, _super);
    function KalturaESearchResult(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.highlight === 'undefined')
            _this.highlight = [];
        if (typeof _this.itemsData === 'undefined')
            _this.itemsData = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaESearchResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchResult' },
            highlight: { type: 'a', subTypeConstructor: KalturaESearchHighlight, subType: 'KalturaESearchHighlight' },
            itemsData: { type: 'a', subTypeConstructor: KalturaESearchItemDataResult, subType: 'KalturaESearchItemDataResult' }
        });
        return result;
    };
    return KalturaESearchResult;
}(KalturaObjectBase));
export { KalturaESearchResult };
if (false) {
    /** @type {?} */
    KalturaESearchResult.prototype.highlight;
    /** @type {?} */
    KalturaESearchResult.prototype.itemsData;
}
typesMappingStorage['KalturaESearchResult'] = KalturaESearchResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hSZXN1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0FBUWxGLElBQUE7SUFBMEMsZ0RBQWlCO0lBS3ZELDhCQUFZLElBQWdDO1FBQTVDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztLQUM1RDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzdHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQzlHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBcENMO0VBWTBDLGlCQUFpQixFQXlCMUQsQ0FBQTtBQXpCRCxnQ0F5QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoSGlnaGxpZ2h0IH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEhpZ2hsaWdodCc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0IH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0JztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBoaWdobGlnaHQ/IDogS2FsdHVyYUVTZWFyY2hIaWdobGlnaHRbXTtcblx0aXRlbXNEYXRhPyA6IEthbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHRbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hSZXN1bHQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBoaWdobGlnaHQgOiBLYWx0dXJhRVNlYXJjaEhpZ2hsaWdodFtdO1xuXHRpdGVtc0RhdGEgOiBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0W107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoUmVzdWx0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0ID09PSAndW5kZWZpbmVkJykgdGhpcy5oaWdobGlnaHQgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaXRlbXNEYXRhID09PSAndW5kZWZpbmVkJykgdGhpcy5pdGVtc0RhdGEgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFJlc3VsdCcgfSxcblx0XHRcdFx0aGlnaGxpZ2h0IDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEhpZ2hsaWdodCwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaEhpZ2hsaWdodCcgfSxcblx0XHRcdFx0aXRlbXNEYXRhIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0LCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoUmVzdWx0J10gPSBLYWx0dXJhRVNlYXJjaFJlc3VsdDsiXX0=