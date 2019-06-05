/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCaptionFieldName } from './KalturaESearchCaptionFieldName';
import { KalturaESearchEntryAbstractNestedItem } from './KalturaESearchEntryAbstractNestedItem';
/**
 * @record
 */
export function KalturaESearchCaptionItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCaptionItemArgs.prototype.fieldName;
export class KalturaESearchCaptionItem extends KalturaESearchEntryAbstractNestedItem {
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
            objectType: { type: 'c', default: 'KalturaESearchCaptionItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCaptionFieldName, subType: 'KalturaESearchCaptionFieldName' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCaptionItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchCaptionItem'] = KalturaESearchCaptionItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBNkMsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7OztBQU8zSSxNQUFNLGdDQUFpQyxTQUFRLHFDQUFxQzs7OztJQUloRixZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNuSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaENhcHRpb25GaWVsZE5hbWUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQ2FwdGlvbkZpZWxkTmFtZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtLCBLYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbUFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBLYWx0dXJhRVNlYXJjaENhcHRpb25GaWVsZE5hbWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtIHtcblxuICAgIGZpZWxkTmFtZSA6IEthbHR1cmFFU2VhcmNoQ2FwdGlvbkZpZWxkTmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtJyB9LFxuXHRcdFx0XHRmaWVsZE5hbWUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaENhcHRpb25GaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hDYXB0aW9uRmllbGROYW1lJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtJ10gPSBLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtOyJdfQ==