/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaESearchResult extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.highlight === 'undefined')
            this.highlight = [];
        if (typeof this.itemsData === 'undefined')
            this.itemsData = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchResult' },
            highlight: { type: 'a', subTypeConstructor: KalturaESearchHighlight, subType: 'KalturaESearchHighlight' },
            itemsData: { type: 'a', subTypeConstructor: KalturaESearchItemDataResult, subType: 'KalturaESearchItemDataResult' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchResult.prototype.highlight;
    /** @type {?} */
    KalturaESearchResult.prototype.itemsData;
}
typesMappingStorage['KalturaESearchResult'] = KalturaESearchResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hSZXN1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsTUFBTSwyQkFBNEIsU0FBUSxpQkFBaUI7Ozs7SUFLdkQsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQzVEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM3RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtTQUM5RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoSGlnaGxpZ2h0IH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEhpZ2hsaWdodCc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0IH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0JztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBoaWdobGlnaHQ/IDogS2FsdHVyYUVTZWFyY2hIaWdobGlnaHRbXTtcblx0aXRlbXNEYXRhPyA6IEthbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHRbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hSZXN1bHQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBoaWdobGlnaHQgOiBLYWx0dXJhRVNlYXJjaEhpZ2hsaWdodFtdO1xuXHRpdGVtc0RhdGEgOiBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0W107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoUmVzdWx0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0ID09PSAndW5kZWZpbmVkJykgdGhpcy5oaWdobGlnaHQgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaXRlbXNEYXRhID09PSAndW5kZWZpbmVkJykgdGhpcy5pdGVtc0RhdGEgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFJlc3VsdCcgfSxcblx0XHRcdFx0aGlnaGxpZ2h0IDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEhpZ2hsaWdodCwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaEhpZ2hsaWdodCcgfSxcblx0XHRcdFx0aXRlbXNEYXRhIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0LCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoUmVzdWx0J10gPSBLYWx0dXJhRVNlYXJjaFJlc3VsdDsiXX0=