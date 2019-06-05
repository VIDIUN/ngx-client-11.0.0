/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserFieldName } from './KalturaESearchUserFieldName';
import { KalturaESearchAbstractUserItem } from './KalturaESearchAbstractUserItem';
/**
 * @record
 */
export function KalturaESearchUserItemArgs() { }
/** @type {?|undefined} */
KalturaESearchUserItemArgs.prototype.fieldName;
export class KalturaESearchUserItem extends KalturaESearchAbstractUserItem {
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
            objectType: { type: 'c', default: 'KalturaESearchUserItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchUserFieldName, subType: 'KalturaESearchUserFieldName' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchUserItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchUserItem'] = KalturaESearchUserItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VySXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hVc2VySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSw4QkFBOEIsRUFBc0MsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7OztBQU90SCxNQUFNLDZCQUE4QixTQUFRLDhCQUE4Qjs7OztJQUl0RSxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUM3RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFVzZXJGaWVsZE5hbWUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoVXNlckZpZWxkTmFtZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hVc2VySXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtQXJncyB7XG4gICAgZmllbGROYW1lPyA6IEthbHR1cmFFU2VhcmNoVXNlckZpZWxkTmFtZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hVc2VySXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbSB7XG5cbiAgICBmaWVsZE5hbWUgOiBLYWx0dXJhRVNlYXJjaFVzZXJGaWVsZE5hbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoVXNlckl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVc2VySXRlbScgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hVc2VyRmllbGROYW1lLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoVXNlckZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hVc2VySXRlbSddID0gS2FsdHVyYUVTZWFyY2hVc2VySXRlbTsiXX0=