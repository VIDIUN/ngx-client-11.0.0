/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlaybackContextArgs() { }
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.sources;
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.flavorAssets;
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.actions;
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.messages;
export class KalturaPlaybackContext extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.sources === 'undefined')
            this.sources = [];
        if (typeof this.flavorAssets === 'undefined')
            this.flavorAssets = [];
        if (typeof this.actions === 'undefined')
            this.actions = [];
        if (typeof this.messages === 'undefined')
            this.messages = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaybackContext' },
            sources: { type: 'a', subTypeConstructor: KalturaPlaybackSource, subType: 'KalturaPlaybackSource' },
            flavorAssets: { type: 'a', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' },
            actions: { type: 'a', subTypeConstructor: KalturaRuleAction, subType: 'KalturaRuleAction' },
            messages: { type: 'a', subTypeConstructor: KalturaAccessControlMessage, subType: 'KalturaAccessControlMessage' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlaybackContext.prototype.sources;
    /** @type {?} */
    KalturaPlaybackContext.prototype.flavorAssets;
    /** @type {?} */
    KalturaPlaybackContext.prototype.actions;
    /** @type {?} */
    KalturaPlaybackContext.prototype.messages;
}
typesMappingStorage['KalturaPlaybackContext'] = KalturaPlaybackContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXliYWNrQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXliYWNrQ29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixNQUFNLDZCQUE4QixTQUFRLGlCQUFpQjs7OztJQU96RCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUMxRDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdEcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDL0YsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7U0FDM0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrU291cmNlIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tTb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvckFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yQXNzZXQnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFBY2Nlc3NDb250cm9sTWVzc2FnZSB9IGZyb20gJy4vS2FsdHVyYUFjY2Vzc0NvbnRyb2xNZXNzYWdlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWJhY2tDb250ZXh0QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHNvdXJjZXM/IDogS2FsdHVyYVBsYXliYWNrU291cmNlW107XG5cdGZsYXZvckFzc2V0cz8gOiBLYWx0dXJhRmxhdm9yQXNzZXRbXTtcblx0YWN0aW9ucz8gOiBLYWx0dXJhUnVsZUFjdGlvbltdO1xuXHRtZXNzYWdlcz8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbE1lc3NhZ2VbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXliYWNrQ29udGV4dCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHNvdXJjZXMgOiBLYWx0dXJhUGxheWJhY2tTb3VyY2VbXTtcblx0Zmxhdm9yQXNzZXRzIDogS2FsdHVyYUZsYXZvckFzc2V0W107XG5cdGFjdGlvbnMgOiBLYWx0dXJhUnVsZUFjdGlvbltdO1xuXHRtZXNzYWdlcyA6IEthbHR1cmFBY2Nlc3NDb250cm9sTWVzc2FnZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheWJhY2tDb250ZXh0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc291cmNlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc291cmNlcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5mbGF2b3JBc3NldHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmZsYXZvckFzc2V0cyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hY3Rpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5hY3Rpb25zID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1lc3NhZ2VzID09PSAndW5kZWZpbmVkJykgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQbGF5YmFja0NvbnRleHQnIH0sXG5cdFx0XHRcdHNvdXJjZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YmFja1NvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWJhY2tTb3VyY2UnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0cyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvckFzc2V0LCBzdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JBc3NldCcgfSxcblx0XHRcdFx0YWN0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJ1bGVBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVJ1bGVBY3Rpb24nIH0sXG5cdFx0XHRcdG1lc3NhZ2VzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWNjZXNzQ29udHJvbE1lc3NhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xNZXNzYWdlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWJhY2tDb250ZXh0J10gPSBLYWx0dXJhUGxheWJhY2tDb250ZXh0OyJdfQ==